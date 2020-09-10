export default {
  name: "signUp",
  title: "SIGN UP",
  type: "object",
  fields: [
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
    {
      name: "message",
      type: "richText",
      title: "MESSAGE",
      validation: (Rule) => Rule.required(),
    },
  ],
};
