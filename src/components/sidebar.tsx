import { Button as BaseButton } from "@base-ui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import styles from "./sidebar.module.css";

type TCommonProps = {
  className?: string;
} & PropsWithChildren;

const Root = ({ className, children, ...props }: TCommonProps) => {
  return (
    <aside className={clsx(styles.root, className)} {...props}>
      {children}
    </aside>
  );
};

const Header = ({ className, children, ...props }: TCommonProps) => {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      {children}
    </header>
  );
};

const Content = ({ className, children, ...props }: TCommonProps) => {
  return (
    <div className={clsx(styles.content, className)} {...props}>
      {children}
    </div>
  );
};

type TGroupProps = {
  variant?: "compact" | "normal";
} & TCommonProps;

const Group = ({ variant = "normal", className, children, ...props }: TGroupProps) => {
  return (
    <section className={clsx(styles.group, className)} data-variant={variant} {...props}>
      {children}
    </section>
  );
};

const GroupHeader = ({ className, children, ...props }: TCommonProps) => {
  return (
    <div className={clsx(styles.groupHeader, className)} {...props}>
      {children}
    </div>
  );
};

const GroupTitle = ({ className, children, ...props }: TCommonProps) => {
  return (
    <div className={clsx(styles.groupTitle, className)} {...props}>
      {children}
    </div>
  );
};

const GroupAction = ({ className, children, ...props }: BaseButton.Props) => {
  return (
    <BaseButton className={clsx(styles.groupAction, className)} {...props}>
      {children}
    </BaseButton>
  );
};

const List = ({ className, children, ...props }: TCommonProps) => {
  return (
    <ul className={clsx(styles.list, className)} {...props}>
      {children}
    </ul>
  );
};

const Item = ({ className, children, ...props }: TCommonProps) => {
  return (
    <li className={clsx(styles.item, className)} {...props}>
      {children}
    </li>
  );
};

type TItemButtonProps = {
  isActive?: boolean;
} & BaseButton.Props;

const ItemButton = ({ isActive, className, children, ...props }: TItemButtonProps) => {
  return (
    <BaseButton className={clsx(styles.itemButton, className)} data-is-active={isActive || false} {...props}>
      {children}
    </BaseButton>
  );
};

const Footer = ({ className, children, ...props }: TCommonProps) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      {children}
    </footer>
  );
};

export { Root, Header, Content, Group, GroupHeader, GroupTitle, GroupAction, List, Item, ItemButton, Footer };
