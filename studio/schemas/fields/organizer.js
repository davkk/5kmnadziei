export default {
  name: "organizer",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required().min(3).max(60),
    },
    {
      name: "logo",
      type: "img",
      title: "LOGO",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "info",
      type: "richText",
      title: "INFO",
      validation: (Rule) => Rule.required(),
    },
  ],
};
