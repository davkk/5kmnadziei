export default {
  name: "img",
  type: "image",
  title: "IMAGE",
  hotspot: true,
  storeOriginalFilename: false,
  fields: [
    {
      name: "alt",
      type: "string",
      title: "ALT",
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
