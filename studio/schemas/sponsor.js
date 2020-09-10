// TODO: fill sponsors with data

export default {
  name: "sponsor",
  title: "SPONSORS",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "NAME",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      type: "img",
      title: "LOGO",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "website",
      type: "url",
      title: "WEBSITE",
    },
  ],
};
