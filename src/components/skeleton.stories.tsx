import { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "./skeleton"

const meta = {
  component: Skeleton,
  title: "Skeleton",
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div
        style={{
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "max-content",
        }}
      >
        <div
          style={{
            width: "40px",
            minWidth: "40px",
            height: "40px",
            overflow: "hidden",
            minHeight: "40px",
            borderRadius: "999px",
            backgroundColor: "var(--gray-3)",
          }}
        >
          <Skeleton />
        </div>
        <div
          style={{
            width: "250px",
            height: "40px",
            borderRadius: "6px",
            backgroundColor: "var(--gray-3)",
            overflow: "hidden",
          }}
        >
          <Skeleton />
        </div>
      </div>
    )
  },
}
