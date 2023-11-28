import {palettes} from "./palettes"

export const components = {
  dark: {
    ui: {
      wrapper: {
        bg: palettes.color[1],
      },
      shadows: {
        level1: "0px 4px 8px red", 
        level2: "0px 6px 12px rgba(0, 0, 0, 0.15)", 
      },
    },
  },

  light: {
    ui: {
      wrapper: {
        bg: palettes.color[3]
      },
      shadows: {
        level1: "0px 4px 8px rgba(0, 0, 0, 0.12)",
        level2: "0px 6px 12px rgba(0, 0, 0, 0.15)",
      }
    },
  },
};
