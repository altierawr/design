import { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./input"

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Input placeholder="Search..." />
      </>
    )
  },
}
