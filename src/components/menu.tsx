import { Menu as BaseMenu } from "@base-ui/react";
import clsx from "clsx";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { ComponentProps } from "react";

import { Loader } from "./loader";
import styles from "./menu.module.css";

const Root = ({ children, ...props }: BaseMenu.Root.Props) => {
  return (
    <BaseMenu.Root data-accent-color="gray" {...props}>
      {children}
    </BaseMenu.Root>
  );
};

const Trigger = ({ children, ...props }: BaseMenu.Trigger.Props) => {
  return <BaseMenu.Trigger {...props}>{children}</BaseMenu.Trigger>;
};

type TPopupProps = {
  side?: ComponentProps<typeof BaseMenu.Positioner>["side"];
} & ComponentProps<typeof BaseMenu.Popup>;

const Popup = ({ className, side, children, ...props }: TPopupProps) => {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className={styles.positioner} sideOffset={8} side={side}>
        <BaseMenu.Popup data-accent-color="gray" className={clsx(styles.popup, className)} {...props}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
};

const Arrow = ({ children, ...props }: BaseMenu.Arrow.Props) => {
  return <BaseMenu.Arrow {...props}>{children}</BaseMenu.Arrow>;
};

const Item = ({ className, children, ...props }: BaseMenu.Item.Props) => {
  return (
    <BaseMenu.Item className={clsx(className, styles.item)} data-accent-color="gray" {...props}>
      {children}
    </BaseMenu.Item>
  );
};

type TCheckboxItemProps = {
  isLoading?: boolean;
} & BaseMenu.CheckboxItem.Props;

const CheckboxItem = ({ isLoading, className, children, ...props }: TCheckboxItemProps) => {
  return (
    <BaseMenu.CheckboxItem
      className={clsx(className, styles.checkboxItem)}
      data-accent-color="gray"
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className={styles.checkboxItemIndicator}>
          <Loader size={14} />
        </div>
      )}
      {!isLoading && (
        <BaseMenu.CheckboxItemIndicator className={styles.checkboxItemIndicator}>
          <CheckIcon />
        </BaseMenu.CheckboxItemIndicator>
      )}
      <span className={styles.checkboxItemText}>{children}</span>
    </BaseMenu.CheckboxItem>
  );
};

const Separator = ({ className, ...props }: BaseMenu.Separator.Props) => {
  return <BaseMenu.Separator className={clsx(className, styles.separator)} data-accent-color="gray" {...props} />;
};

const Submenu = ({ children, ...props }: BaseMenu.SubmenuRoot.Props) => {
  return <BaseMenu.SubmenuRoot {...props}>{children}</BaseMenu.SubmenuRoot>;
};

const SubmenuTrigger = ({ className, children, ...props }: BaseMenu.SubmenuTrigger.Props) => {
  return (
    <BaseMenu.SubmenuTrigger className={clsx(styles.submenuTrigger, className)} {...props}>
      {children}
      <ChevronRightIcon />
    </BaseMenu.SubmenuTrigger>
  );
};

const SubmenuPopup = ({ className, side, children, ...props }: TPopupProps) => {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className={styles.positioner} sideOffset={4} side={side}>
        <BaseMenu.Popup data-accent-color="gray" className={clsx(styles.popup, className)} {...props}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
};

export { Root, Trigger, Popup, Arrow, Item, CheckboxItem, Separator, Submenu, SubmenuTrigger, SubmenuPopup };
