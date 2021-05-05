export default {
  name: "homePage",
  title: "HOMEPAGE",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "hero",
      type: "hero",
      title: "HERO",
    },
    {
      name: "patronage",
      type: "patronage",
      title: "PATRONAGE",
    },
    {
      name: "sponsors",
      type: "array",
      title: "SPONSORS",
      of: [{ type: "reference", to: [{ type: "sponsor" }] }],
      validation: (Rule) => Rule.required().unique().min(1),
    },
    {
      name: "contactUs",
      type: "contactUs",
      title: "CONTACT US",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "HOMEPAGE",
      };
    },
  },
};
