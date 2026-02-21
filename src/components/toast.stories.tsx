import { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import { Toast, toastManager } from "./toast";

const meta = {
  component: Toast,
  title: "Toast",
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Toast />

        <div className="flex gap-2">
          <Button
            color="blue"
            onClick={() =>
              toastManager.add({
                title: "App updated",
                description: "The application was updated to version 0.5.2.",
                type: "info",
                actionProps: {
                  children: "View release notes",
                },
              })
            }
          >
            Info
          </Button>
          <Button
            color="green"
            onClick={() =>
              toastManager.add({
                title: "Item added to playlist",
                description: "The song was added to the playlist",
                type: "success",
                actionProps: {
                  children: "View playlist",
                },
              })
            }
          >
            Success
          </Button>
          <Button
            color="yellow"
            onClick={() =>
              toastManager.add({
                title: "Subscription expiration",
                description:
                  "Your premium subscription is expiring in 16 hours. Please renew now to avoid disruptions.",
                type: "warning",
                actionProps: {
                  children: "Renew now",
                },
              })
            }
          >
            Warning
          </Button>
          <Button
            color="red"
            onClick={() =>
              toastManager.add({
                title: "Something went wrong",
                description:
                  "There was an issue when trying to play your requested song. Please try again or contact the developers if the issue persists.",
                type: "error",
              })
            }
          >
            Error
          </Button>
        </div>
      </>
    );
  },
};
