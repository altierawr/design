import type { Preview } from "@storybook/react-vite"
import "../src/styles/index.css"
import "../src/styles/tokens/colors/blue.css"
import "../src/styles/tokens/colors/gray.css"
import "./fonts.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
