export default {
  name: "rulesPage",
  title: "RULES",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "text",
      type: "richText",
      title: "TEXT",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "RULES",
      };
    },
  },
};
