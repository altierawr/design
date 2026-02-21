import { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import { Spacer } from "./spacer";

const meta = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "blue",
    variant: "solid",
  },
  render: () => {
    return (
      <div>
        <h3>White black</h3>
        <div className="flex gap-2">
          <Button color="whiteblack" variant="solid" size="xs">
            Button long text
          </Button>
          <Button color="whiteblack" variant="surface" size="xs">
            Button
          </Button>
          <Button color="whiteblack" variant="soft" size="xs">
            Button
          </Button>
          <Button color="whiteblack" variant="outline" size="xs">
            Button
          </Button>
          <Button color="whiteblack" variant="ghost" size="xs">
            Button
          </Button>
        </div>

        <Spacer size="3" />
        <h3>Extra small</h3>
        <div className="flex gap-2">
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

        <Spacer size="3" />

        <h3>Loading</h3>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button color="blue" variant="solid" isLoading>
            Loading Button
          </Button>
          <Button color="blue" variant="surface" isLoading>
            Loading Button
          </Button>
          <Button color="blue" variant="soft" isLoading>
            Loading Button
          </Button>
          <Button color="blue" variant="outline" isLoading>
            Loading Button
          </Button>
          <Button color="blue" variant="ghost" isLoading>
            Loading Button
          </Button>
        </div>

        <Spacer size="3" />
        <h3>Disabled</h3>
        <Button color="blue" isDisabled>
          Disabled button
        </Button>
      </div>
    );
  },
};
