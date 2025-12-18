import clsx from "clsx"
import { PropsWithChildren } from "react"
import { Button } from "./button"
import type { TButtonProps } from "./button"
import styles from "./icon-button.module.css"

type TProps = TButtonProps

const IconButton = ({
  color,
  variant,
  onClick,
  isDisabled,
  children,
  ...props
}: PropsWithChildren<TProps>) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(styles.iconButton, styles[variant])}
      {...props}
    >
      {children}
    </Button>
  )
}

export { IconButton }
