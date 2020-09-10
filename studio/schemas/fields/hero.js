export default {
  name: "hero",
  type: "object",
  title: "HERO",
  fields: [
    {
      name: "eventDate",
      type: "date",
      title: "EVENT DATE",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      type: "string",
      title: "MESSAGE",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cta",
      type: "string",
      title: "CTA",
    },
    {
      name: "motto",
      type: "richText",
      title: "MOTTO",
    },
  ],
};
