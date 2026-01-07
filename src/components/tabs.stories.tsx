import { Meta, StoryObj } from "@storybook/react-vite"
import { Spacer } from "./spacer"
import * as Tabs from "./tabs"

const meta = {
  component: Tabs.Root,
  title: "Tabs",
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs.Root>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.TabSeparator />
          <Tabs.Tab value="albums">Albums</Tabs.Tab>
          <Tabs.TabSeparator />
          <Tabs.Tab value="songs">Songs</Tabs.Tab>
          <Tabs.TabSeparator />
          <Tabs.Tab value="compilations">Compilations</Tabs.Tab>
          <Tabs.TabSeparator />
          <Tabs.Tab value="appearsOn">Appears On</Tabs.Tab>
        </Tabs.List>
        <Spacer size="2" />
        <Tabs.Panel value="overview">Overview panel</Tabs.Panel>
      </Tabs.Root>
    )
  },
}
