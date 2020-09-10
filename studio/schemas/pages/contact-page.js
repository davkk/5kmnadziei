export default {
  name: "contactPage",
  title: "CONTACT",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "organizers",
      type: "array",
      title: "ORGANIZERS",
      of: [
        {
          type: "organizer",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "CONTACT",
      };
    },
  },
};
