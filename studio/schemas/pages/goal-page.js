export default {
  name: "goalPage",
  title: "GOAL",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "goalEntries",
      type: "array",
      title: "ENTRIES",
      of: [
        {
          type: "goalEntry",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "GOAL",
      };
    },
  },
};
