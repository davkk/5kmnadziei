export default {
  name: "community",
  type: "object",
  fields: [
    {
      name: "text",
      type: "text",
      title: "TEXT",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      type: "img",
      title: "LOGO",
      validation: (Rule) => Rule.required(),
    },
  ],
};
