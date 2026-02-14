import clsx from "clsx";

import type { TButtonProps } from "./button";

import { Button } from "./button";
import styles from "./icon-button.module.css";

type TProps = TButtonProps;

const IconButton = ({ color, variant, onClick, isDisabled, className, size = "md", children, ...props }: TProps) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      isDisabled={isDisabled}
      className={clsx(className, styles.iconButton, styles[size])}
      {...props}
    >
      {children}
    </Button>
  );
};

export { IconButton };
