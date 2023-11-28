import { palettes } from "./palettes";

export const components = {
  dark: {
    ui: {
      button: {
        bg: palettes.color[1],
      },
      shadows: {
        shadow1: "1px 4px 15px 2px rgba(34, 60, 80, 0.2)",
        shadow2: "1px 4px 42px 2px rgba(34, 60, 80, 0.2)",
        shadow3: "1px 4px 73px 2px rgba(34, 60, 80, 0.2)",
        shadow4: "1px 4px 100px 12px rgba(34, 60, 80, 0.2)",
        shadow5:
          "0px 0px 4px rgba(0, 0, 0, .3), -23px 0 20px -23px rgba(0, 0, 0, .8), 23px 0 20px -23px rgba(0, 0, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset",
        shadow6: `
          0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
          &:before,
          &:after {
            content:"";
            position:absolute;
            z-index:-1;
            bottom:15px;
            left:10px;
            width:50%;
            height:20%;
            max-width:300px;
            box-shadow:0 15px 10px rgba(0, 0, 0, 0.7);
            transform:rotate(-3deg);
          }
          &:after {
            right:10px;
            left:auto;
            transform:rotate(3deg);
          }
        `,
      },
    },
  },

  light: {
    ui: {
      button: {
        bg: palettes.color[3],
      },
      shadows: {
        level1: "1px 4px 15px 2px rgba(34, 60, 80, 0.2)",
        level2: "1px 4px 42px 2px rgba(34, 60, 80, 0.2)",
        level3: "1px 4px 73px 2px rgba(34, 60, 80, 0.2)",
        level4: "1px 4px 100px 12px rgba(34, 60, 80, 0.2)",
      },
    },
  },
};
