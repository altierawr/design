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
    );
  },
};

export const Nested: Story = {
  render: () => {
    return (
      <Menu.Root>
        <Menu.Trigger render={<Button variant="solid" color="blue" />}>Open Menu</Menu.Trigger>

        <Menu.Popup>
          <Menu.Item>Play Next</Menu.Item>
          <Menu.Item>Play Last</Menu.Item>
          <Menu.Separator />
          <Menu.Submenu>
            <Menu.SubmenuTrigger>Add to Library</Menu.SubmenuTrigger>
            <Menu.SubmenuPopup>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>Relaxation</Menu.Item>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>Relaxation</Menu.Item>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>
                <span>Relaxation the best playlist in the whole wide world :D</span>
              </Menu.Item>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>Relaxation</Menu.Item>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>Relaxation</Menu.Item>
              <Menu.Item>Rave</Menu.Item>
              <Menu.Item>Chill vibes</Menu.Item>
              <Menu.Item>Relaxation</Menu.Item>
            </Menu.SubmenuPopup>
          </Menu.Submenu>
          <Menu.Item>Add to Playlist</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Item>Share</Menu.Item>
        </Menu.Popup>
      </Menu.Root>
    );
  },
};

export const Checkbox: Story = {
  render: () => {
    return (
      <Menu.Root>
        <Menu.Trigger render={<Button color="blue" />}>Open Menu</Menu.Trigger>

        <Menu.Popup>
          <Menu.CheckboxItem>Pure rave</Menu.CheckboxItem>
          <Menu.CheckboxItem isLoading>Chill vibes</Menu.CheckboxItem>
          <Menu.CheckboxItem>Mood</Menu.CheckboxItem>
        </Menu.Popup>
      </Menu.Root>
    );
  },
};
