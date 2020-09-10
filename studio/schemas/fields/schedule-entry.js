export default {
  name: "scheduleEntry",
  type: "object",
  fields: [
    {
      name: "time",
      type: "datetime",
      title: "TIME",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "EVENT",
    },
    {
      name: "info",
      type: "richText",
      title: "INFO",
      validation: (Rule) => Rule.required(),
    },
  ],
};
