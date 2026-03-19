import { Meta, StoryObj } from "@storybook/react-vite";
import { Heart } from "lucide-react";

import { IconButton } from "./icon-button";

const meta = {
  component: IconButton,
  title: "Icon Button",
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "blue",
    variant: "solid",
  },
  render: () => {
    return (
      <div className="flex gap-2">
        <IconButton color="blue" variant="solid">
          <Heart />
        </IconButton>
        <IconButton color="blue" variant="surface">
          <Heart />
        </IconButton>
        <IconButton color="blue" variant="soft">
          <Heart />
        </IconButton>
        <IconButton color="blue" variant="outline">
          <Heart />
        </IconButton>
        <IconButton color="blue" variant="ghost">
          <Heart />
        </IconButton>
      </div>
    );
  },
};
