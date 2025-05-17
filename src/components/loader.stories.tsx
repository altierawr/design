import { Meta, StoryObj } from "@storybook/react-vite"
import { Loader } from "./loader"

const meta = {
  component: Loader,
  title: "Loader",
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
