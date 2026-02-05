import { Menu as BaseMenu } from "@base-ui/react";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

import styles from "./menu.module.css";

type TRootProps = ComponentProps<typeof BaseMenu.Root>;

const Root = ({ children, ...props }: TRootProps) => {
  return (
    <BaseMenu.Root data-accent-color="gray" {...props}>
      {children}
    </BaseMenu.Root>
  );
};

type TTriggerProps = ComponentProps<typeof BaseMenu.Trigger>;

const Trigger = ({ children, ...props }: TTriggerProps) => {
  return <BaseMenu.Trigger {...props}>{children}</BaseMenu.Trigger>;
};

type TContentProps = PropsWithChildren;

const Content = ({ children }: TContentProps) => {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className={styles.positioner} sideOffset={8}>
        <BaseMenu.Popup data-accent-color="gray" className={styles.popup}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
};

type TArrowProps = ComponentProps<typeof BaseMenu.Arrow>;

const Arrow = ({ children, ...props }: TArrowProps) => {
  return <BaseMenu.Arrow {...props}>{children}</BaseMenu.Arrow>;
};

type TItemProps = ComponentProps<typeof BaseMenu.Item>;

const Item = ({ className, children, ...props }: TItemProps) => {
  return (
    <BaseMenu.Item className={clsx(className, styles.item)} data-accent-color="gray" {...props}>
      {children}
    </BaseMenu.Item>
  );
};

type TSeparatorProps = ComponentProps<typeof BaseMenu.Separator>;

const Separator = ({ className, ...props }: TSeparatorProps) => {
  return <BaseMenu.Separator className={clsx(className, styles.separator)} data-accent-color="gray" {...props} />;
};

export { Root, Trigger, Content, Arrow, Item, Separator };
