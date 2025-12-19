import { Button as BaseButton } from "@base-ui/react"
import clsx from "clsx"
import { ComponentProps, PropsWithChildren } from "react"
import { TColor } from "@/utils/colors"
import styles from "./button.module.css"

export type TButtonProps = Omit<
  ComponentProps<typeof BaseButton>,
  "render" | "nativeButton" | "disabled"
> & {
  color: TColor
  variant: "solid" | "surface" | "soft" | "outline" | "ghost"
  size?: "xs" | "sm" | "md"
  onClick?: () => void
  isDisabled?: boolean
  className?: string
}

const Button = ({
  children,
  color,
  variant,
  size = "md",
  onClick,
  isDisabled,
  className,
  ...props
}: PropsWithChildren<TButtonProps>) => {
  return (
    <BaseButton
      data-accent-color={color}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(className, styles.button, styles[variant], styles[size])}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export { Button }
