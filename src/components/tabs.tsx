import { Tabs } from "@base-ui/react";
import clsx from "clsx";
import { ComponentProps } from "react";

import styles from "./tabs.module.css";

type TRootProps = ComponentProps<typeof Tabs.Root>;

const Root = ({ className, children, ...props }: TRootProps) => {
  return (
    <Tabs.Root className={clsx(className, styles.root)} {...props}>
      {children}
    </Tabs.Root>
  );
};

type TListProps = {
  size?: "md" | "sm";
} & ComponentProps<typeof Tabs.List>;

const List = ({ size = "md", className, children, ...props }: TListProps) => {
  return (
    <Tabs.List data-size={size} className={clsx(className, styles.list)} {...props}>
      <>
        {children}
        <Tabs.Indicator className={styles.indicator} />
      </>
    </Tabs.List>
  );
};

type TTabProps = ComponentProps<typeof Tabs.Tab>;

const Tab = ({ value, className, children, ...props }: TTabProps) => {
  return (
    <Tabs.Tab value={value} className={clsx(className, styles.tab)} {...props}>
      {children}
    </Tabs.Tab>
  );
};

type TTabSeparatorProps = {
  className?: string;
};

const TabSeparator = ({ className }: TTabSeparatorProps) => {
  return <div className={clsx(styles.tabSeparator, className)} />;
};

type TPanelProps = ComponentProps<typeof Tabs.Panel>;

const Panel = ({ value, className, children, ...props }: TPanelProps) => {
  return (
    <Tabs.Panel value={value} className={clsx(className, styles.panel)} {...props}>
      {children}
    </Tabs.Panel>
  );
};

export { Root, List, Tab, TabSeparator, Panel };
