export default {
  name: "goalEntry",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "TITLE",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "text",
      type: "richText",
      title: "TEXT",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "img",
      title: "IMAGE",
      validation: (Rule) => Rule.required(),
    },
  ],
};
