import { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar, Clock, Search } from "lucide-react"
import { Input } from "./input"
import { Spacer } from "./spacer"

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
      <div
        style={{
          display: "grid",
          placeContent: "start",
          gap: "var(--space-2)",
        }}
      >
        <Input placeholder="Search..." />
        <Input
          placeholder="Password"
          errors={[
            "Password must be at least 8 characters long",
            "Password must contain characters, numbers and special characters",
          ]}
        />
        <Input placeholder="Search..." leftIcon={Search} />
        <Input placeholder="Pick date..." leftIcon={Calendar} />
        <Input placeholder="Pick time..." leftIcon={Clock} />
        <Input placeholder="Search..." isLoading={true} />
      </div>
    )
  },
}
