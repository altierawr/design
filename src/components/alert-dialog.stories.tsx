import { Meta, StoryObj } from "@storybook/react-vite";

import * as AlertDialog from "./alert-dialog";
import { Button } from "./button";

const meta = {
  component: AlertDialog.Root,
  title: "Alert Dialog",
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <AlertDialog.Root>
        <AlertDialog.Trigger render={<Button color="red">Delete playlist</Button>} />
        <AlertDialog.Popup>
          <AlertDialog.Header>
            <AlertDialog.Title>Delete playlist?</AlertDialog.Title>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <AlertDialog.Description>Are you sure you want to delete this playlist?</AlertDialog.Description>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.Close>Cancel</AlertDialog.Close>
            <AlertDialog.Close render={<Button color="red">Delete playlist</Button>} />
          </AlertDialog.Footer>
        </AlertDialog.Popup>
      </AlertDialog.Root>
    );
  },
};
