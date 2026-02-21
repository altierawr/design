import type { Preview } from "@storybook/react-vite";

import { create } from "storybook/theming";

import "../src/styles/index.css";
import "../src/styles/tokens/colors/blue.css";
import "../src/styles/tokens/colors/gray.css";
import "../src/styles/tokens/colors/red.css";
import "../src/styles/tokens/colors/yellow.css";
import "../src/styles/tokens/colors/green.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    darkMode: {
      dark: {
        ...create({
          base: "dark",
        }),
      },
      light: {
        ...create({
          base: "light",
        }),
      },
      classTarget: "body",
      darkClass: "dark",
      stylePreview: true,
    },
  },
};

export default preview;
