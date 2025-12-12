import { Button } from "@base-ui/react"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import type { TButtonProps } from "./button"
import styles from "./icon-button.module.css"

type TProps = TButtonProps & {
  variant: "solid" | "surface" | "soft" | "outline" | "ghost"
}

const IconButton = ({
  color,
  variant,
  onClick,
  isDisabled,
  children,
}: PropsWithChildren<TProps>) => {
  return (
    <Button
      data-accent-color={color}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(styles.iconButton, styles[variant])}
    >
      {children}
    </Button>
  )
}

export { IconButton }
