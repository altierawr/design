import { ScrollArea as BaseScrollArea } from "@base-ui/react";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

import styles from "./scroll-area.module.css";

type TProps = ComponentProps<typeof BaseScrollArea.Viewport> & {
  className?: string;
  removeScrollbarVerticalMargins?: boolean;
  includeScrollbarLeftMargin?: boolean;
};

const ScrollArea = ({
  className,
  removeScrollbarVerticalMargins,
  includeScrollbarLeftMargin,
  children,
  ...props
}: PropsWithChildren<TProps>) => {
  return (
    <BaseScrollArea.Root data-accent-color="gray" className={styles.root}>
      <BaseScrollArea.Viewport className={styles.viewport} {...props}>
        <BaseScrollArea.Content
          className={clsx(styles.content, className, includeScrollbarLeftMargin && styles.contentScrollbarMargin)}
        >
          {children}
        </BaseScrollArea.Content>
        <BaseScrollArea.Scrollbar
          className={clsx(styles.scrollbar, removeScrollbarVerticalMargins && styles.scrollbarNoVerticalMargins)}
        >
          <BaseScrollArea.Thumb className={styles.thumb} />
        </BaseScrollArea.Scrollbar>
      </BaseScrollArea.Viewport>
    </BaseScrollArea.Root>
  );
};

export { ScrollArea };
