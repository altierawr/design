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
      <>
        <Input placeholder="Search..." />
        <Spacer size="2" />
        <Input placeholder="Search..." leftIcon={Search} />
        <Spacer size="2" />
        <Input placeholder="Pick date..." leftIcon={Calendar} />
        <Spacer size="2" />
        <Input placeholder="Pick time..." leftIcon={Clock} />
        <Spacer size="2" />
        <Input placeholder="Search..." isLoading={true} />
      </>
    )
  },
}
