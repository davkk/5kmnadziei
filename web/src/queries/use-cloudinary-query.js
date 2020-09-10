import { graphql, useStaticQuery } from 'gatsby';

const useCloudinaryQuery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryQuery {
      allCloudinaryImage {
        edges {
          node {
            public_id
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allCloudinaryImage.edges.map(edge => edge.node);
};

export default useCloudinaryQuery;
