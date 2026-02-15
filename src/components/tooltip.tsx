import { Tooltip as BaseTooltip } from "@base-ui/react";
import clsx from "clsx";
import { ComponentProps } from "react";

import styles from "./tooltip.module.css";

type TProviderProps = ComponentProps<typeof BaseTooltip.Provider>;

const Provider = ({ children, ...props }: TProviderProps) => {
  return (
    <BaseTooltip.Provider delay={100} {...props}>
      {children}
    </BaseTooltip.Provider>
  );
};

type TRootProps = ComponentProps<typeof BaseTooltip.Root>;

const Root = ({ children, ...props }: TRootProps) => {
  return <BaseTooltip.Root {...props}>{children}</BaseTooltip.Root>;
};

type TTriggerProps = ComponentProps<typeof BaseTooltip.Trigger>;

const Trigger = ({ children, ...props }: TTriggerProps) => {
  return <BaseTooltip.Trigger {...props}>{children}</BaseTooltip.Trigger>;
};

type TPopupProps = {
  side?: ComponentProps<typeof BaseTooltip.Positioner>["side"];
  align?: ComponentProps<typeof BaseTooltip.Positioner>["align"];
  sideOffset?: number;
} & ComponentProps<typeof BaseTooltip.Popup>;

const Popup = ({ className, children, side = "top", align, sideOffset = 8, ...props }: TPopupProps) => {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner className={styles.positioner} side={side} align={align} sideOffset={sideOffset}>
        <BaseTooltip.Popup className={clsx(styles.popup, className)} {...props}>
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
};

type TArrowProps = ComponentProps<typeof BaseTooltip.Arrow>;

const Arrow = ({ className, ...props }: TArrowProps) => {
  return <BaseTooltip.Arrow className={clsx(styles.arrow, className)} {...props} />;
};

export { Provider, Root, Trigger, Popup, Arrow };
