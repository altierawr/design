import { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import { Spacer } from "./spacer"

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
    variant: "solid",
  },
  render: () => {
    return (
      <div>
        <h3>Extra small</h3>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button color="blue" variant="solid" size="xs">
            Button long text
          </Button>
          <Button color="blue" variant="surface" size="xs">
            Button
          </Button>
          <Button color="blue" variant="soft" size="xs">
            Button
          </Button>
          <Button color="blue" variant="outline" size="xs">
            Button
          </Button>
          <Button color="blue" variant="ghost" size="xs">
            Button
          </Button>
        </div>

        <Spacer size="3" />

        <h3>Small</h3>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button color="blue" variant="solid" size="sm">
            Button long text
          </Button>
          <Button color="blue" variant="surface" size="sm">
            Button
          </Button>
          <Button color="blue" variant="soft" size="sm">
            Button
          </Button>
          <Button color="blue" variant="outline" size="sm">
            Button
          </Button>
          <Button color="blue" variant="ghost" size="sm">
            Button
          </Button>
        </div>

        <Spacer size="3" />

        <h3>Medium</h3>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button color="blue" variant="solid">
            Button
          </Button>
          <Button color="blue" variant="surface">
            Button
          </Button>
          <Button color="blue" variant="soft">
            Button
          </Button>
          <Button color="blue" variant="outline">
            Button
          </Button>
          <Button color="blue" variant="ghost">
            Button
          </Button>
        </div>
      </div>
    )
  },
}
