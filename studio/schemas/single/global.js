export default {
  name: "global",
  title: "GLOBAL",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "signUp",
      type: "signUp",
      title: "SIGN UP",
    },
    {
      name: "donateMessage",
      type: "donateMessage",
      title: "DONATE MESSAGE",
    },
    {
      name: "copyright",
      type: "string",
      title: "COPYRIGHT",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "SIGN UP",
      };
    },
  },
};
