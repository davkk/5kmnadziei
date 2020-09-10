const cloudinary = require('cloudinary').v2;
const isReachable = require('is-reachable');

const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.sourceNodes = async (
  { actions, store, cache, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;

  delete options.plugins;

  cloudinary.config({
    cloud_name: options.cloudName,
    api_key: options.apiKey,
    api_secret: options.apiSecret,
  });

  const { resources } = await cloudinary.api.resources(
    { type: 'upload', max_results: 500, prefix: '5kmnadziei/' },
    // PRIORITY: !important! merge all pages of images
    function(error) {
      error && console.log(error);
    }
  );

  for (const image of resources) {
    if (await isReachable(image.secure_url)) {
      try {
        const node = Object.assign(
          {
            id: createNodeId(
              `cloudinary-source-${image.public_id}-${image.version}`
            ),
            parent: null,
            children: [],
            internal: {
              type: 'CloudinaryImage',
              content: JSON.stringify(image),
              contentDigest: createContentDigest(image),
            },
          },
          image
        );

        createNode(node);

        const imageNode = await createRemoteFileNode({
          url: image.secure_url,
          cache,
          store,
          createNode,
          createNodeId,
          parentNodeId: node.id,
          ext: `.${image.format}`,
        });

        node['image___NODE'] = imageNode.id;
      } catch (error) {
        console.warn('error creating node', error);
      }
    }
  }
};
