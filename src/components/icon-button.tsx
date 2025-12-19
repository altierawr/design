import clsx from "clsx"
import { ComponentType } from "react"
import { TIconProps } from "@/utils/types"
import { Button } from "./button"
import type { TButtonProps } from "./button"
import styles from "./icon-button.module.css"

type TProps = Omit<TButtonProps, "children"> & {
  icon: ComponentType<TIconProps>
}

const IconButton = ({
  icon,
  color,
  variant,
  onClick,
  isDisabled,
  className,
  size = "md",
  ...props
}: TProps) => {
  const Icon = icon

  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      isDisabled={isDisabled}
      className={clsx(className, styles.iconButton, styles[size])}
      {...props}
    >
      <Icon size={16} strokeWidth={1.5} />
    </Button>
  )
}

export { IconButton }
