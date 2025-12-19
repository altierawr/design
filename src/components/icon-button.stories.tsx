import { Meta, StoryObj } from "@storybook/react-vite"
import { Heart } from "lucide-react"
import { IconButton } from "./icon-button"

const meta = {
  component: IconButton,
  title: "Icon Button",
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Heart,
    color: "blue",
    variant: "solid",
  },
  render: () => {
    return (
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <IconButton color="blue" variant="solid" icon={Heart} />
        <IconButton color="blue" variant="surface" icon={Heart} />
        <IconButton color="blue" variant="soft" icon={Heart} />
        <IconButton color="blue" variant="outline" icon={Heart} />
        <IconButton color="blue" variant="ghost" icon={Heart} />
      </div>
    )
  },
}
