import { Tabs } from "@base-ui/react"
import clsx from "clsx"
import { ComponentProps } from "react"
import { Spacer } from "./spacer"
import styles from "./tabs.module.css"

type TRootProps = ComponentProps<typeof Tabs.Root>

const Root = ({ defaultValue, className, children }: TRootProps) => {
  return (
    <Tabs.Root
      defaultValue={defaultValue}
      className={clsx(className, styles.root)}
    >
      {children}
    </Tabs.Root>
  )
}

type TListProps = ComponentProps<typeof Tabs.List>

const List = ({ className, children }: TListProps) => {
  return (
    <Tabs.List className={clsx(className, styles.list)}>
      <>
        {children}
        <Tabs.Indicator className={styles.indicator} />
      </>
    </Tabs.List>
  )
}

type TTabProps = ComponentProps<typeof Tabs.Tab>

const Tab = ({ value, className, children }: TTabProps) => {
  return (
    <Tabs.Tab value={value} className={clsx(className, styles.tab)}>
      {children}
    </Tabs.Tab>
  )
}

const TabSeparator = () => {
  return <div className={styles.tabSeparator} />
}

type TPanelProps = ComponentProps<typeof Tabs.Panel>

const Panel = ({ value, className, children }: TPanelProps) => {
  return (
    <Tabs.Panel value={value} className={clsx(className, styles.panel)}>
      {children}
    </Tabs.Panel>
  )
}

export { Root, List, Tab, TabSeparator, Panel }
