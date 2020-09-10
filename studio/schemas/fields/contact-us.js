export default {
  name: "contactUs",
  type: "object",
  fields: [
    {
      name: "text",
      type: "string",
      title: "TEXT",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cta",
      type: "string",
      title: "CTA",
      validation: (Rule) => Rule.required(),
    },
  ],
};
