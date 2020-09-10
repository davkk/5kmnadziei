// TODO: move problem, goal, solution, prizes to another page

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
      name: "location",
      type: "richText",
      title: "LOCATION",
    },
    {
      name: "patronage",
      type: "patronage",
      title: "PATRONAGE",
    },
    {
      name: "schedule",
      type: "schedule",
      title: "SCHEDULE",
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
