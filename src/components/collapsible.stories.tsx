import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button } from "./button";
import { Collapsible } from "./collapsible";

const meta = {
  component: Collapsible,
  title: "Collapsible",
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="solid" color="blue" onClick={() => setIsOpen(!isOpen)}>
          Toggle collapsible
        </Button>

        <Collapsible isOpen={isOpen}>
          <p>Hello this is the collapsible content</p>
          <p>Hello this is the collapsible content</p>
          <p>Hello this is the collapsible content</p>
          <p>Hello this is the collapsible content</p>
          <p>Hello this is the collapsible content</p>
          <p>Hello this is the collapsible content</p>
        </Collapsible>
      </>
    );
  },
};
