export default {
  name: "donateMessage",
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
      name: "cta",
      type: "string",
      title: "CTA",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "href",
      type: "url",
      title: "HREF",
      validation: (Rule) => Rule.required(),
    },
  ],
};
