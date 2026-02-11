import { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import * as Menu from "./menu";

const meta = {
  component: Menu.Root,
  title: "Menu",
  tags: ["autodocs"],
} satisfies Meta<typeof Menu.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="dark">
        <Menu.Root>
          <Menu.Trigger render={<Button variant="solid" color="blue" />}>Open Menu</Menu.Trigger>

          <Menu.Popup>
            <Menu.Item>Play Next</Menu.Item>
            <Menu.Item>Play Last</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Add to Library</Menu.Item>
            <Menu.Item>Add to Playlist</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Favorite</Menu.Item>
            <Menu.Item>Share</Menu.Item>
          </Menu.Popup>
        </Menu.Root>
      </div>
    );
  },
};
