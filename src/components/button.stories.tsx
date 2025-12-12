import { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"

const meta = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: "blue",
  },
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Button color="blue">Button</Button>
        <Button color="blue">Button Longer</Button>
      </div>
    )
  },
}
