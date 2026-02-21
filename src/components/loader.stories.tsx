import { Meta, StoryObj } from "@storybook/react-vite";

import { Loader } from "./loader";

const meta = {
  component: Loader,
  title: "Loader",
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 12,
  },
};

export const Medium: Story = {
  args: {
    size: 20,
  },
};

export const Large: Story = {
  args: {
    size: 32,
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-4">
        <Loader size={12} />
        <Loader size={20} />
        <Loader size={32} />
        <Loader size={48} />
      </div>
    );
  },
};
