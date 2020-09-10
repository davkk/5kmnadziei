export default {
  name: "schedule",
  type: "object",
  fields: [
    {
      name: "isHidden",
      type: "boolean",
      title: "HIDDEN",
    },
    {
      name: "scheduleEntry",
      type: "array",
      title: "ENTRIES",
      of: [{ type: "scheduleEntry" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      type: "image",
      title: "SUMMARY",
      validation: (Rule) => Rule.required(),
    },
  ],
};
// TODO: fill schedule with data
