import { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import * as Dialog from "./dialog";
import { Input } from "./input";

const meta = {
  component: Dialog.Root,
  title: "Dialog",
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Dialog.Root>
        <Dialog.Trigger
          render={
            <Button variant="solid" color="blue">
              Open dialog
            </Button>
          }
        />
        <Dialog.Popup>
          <Dialog.Header>
            <Dialog.Title>Create a new playlist</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>Enter a name for your playlist</Dialog.Description>
            <Input className="w-full" />
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close>Close</Dialog.Close>
            <Dialog.Close
              render={
                <Button variant="solid" color="blue">
                  Create playlist
                </Button>
              }
            />
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog.Root>
    );
  },
};
