export default {
  name: "patronage",
  type: "object",
  fields: [
    {
      name: "honorary",
      type: "array",
      title: "HONORARY",
      of: [{ type: "reference", to: [{ type: "patron" }] }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "media",
      type: "array",
      title: "MEDIA",
      of: [{ type: "reference", to: [{ type: "patron" }] }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "community",
      type: "community",
      title: "COMMUNITY",
      validation: (Rule) => Rule.required(),
    },
  ],
};
