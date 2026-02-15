import { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "lucide-react";

import { Button, Tooltip } from ".";

const meta = {
  component: Tooltip.Root,
  title: "Tooltip",
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex h-[240px] w-full items-center justify-center">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger
              render={
                <Button color="gray" variant="surface">
                  <InfoIcon size={16} />
                  Hover me
                </Button>
              }
            />
            <Tooltip.Popup side="right">Tooltip content</Tooltip.Popup>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    );
  },
};
