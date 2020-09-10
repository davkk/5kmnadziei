const screenSizes = {
  xs: 520,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

module.exports = {
  theme: {
    screens: {
      // min
      xs: `${screenSizes.xs + 1}px`,
      sm: `${screenSizes.sm + 1}px`,
      md: `${screenSizes.md + 1}px`,
      lg: `${screenSizes.lg + 1}px`,
      xl: `${screenSizes.xl + 1}px`,

      // max
      "to-xs": { max: `${screenSizes.xs}px` },
      "to-sm": { max: `${screenSizes.sm}px` },
      "to-md": { max: `${screenSizes.md}px` },
      "to-lg": { max: `${screenSizes.lg}px` },
      "to-xl": { max: `${screenSizes.xl}px` },

      // specific
      "xs-sm": { min: `${screenSizes.xs + 1}px`, max: `${screenSizes.sm}px` },
      "sm-md": { min: `${screenSizes.sm + 1}px`, max: `${screenSizes.md}px` },
      "md-lg": { min: `${screenSizes.md + 1}px`, max: `${screenSizes.lg}px` },
      "lg-xl": { min: `${screenSizes.lg + 1}px`, max: `${screenSizes.xl}px` },
    },
    extend: {
      fontFamily: {},
      colors: {},
      width: {
        "7/15": "46.666666667%",
        "3/10": "30%",
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      scale: {
        "200": "2",
        "250": "2.5",
      },
    },
  },
  variants: {},
  plugins: [],
};
