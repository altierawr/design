import { Button as BaseButton } from "@base-ui/react"
import clsx from "clsx"
import { ComponentProps, PropsWithChildren } from "react"
import { TColor } from "@/utils/colors"
import styles from "./button.module.css"
import { Loader } from "./loader"

export type TButtonProps = Omit<
  BaseButton.Props,
  "render" | "nativeButton" | "disabled"
> & {
  color: TColor
  variant: "solid" | "surface" | "soft" | "outline" | "ghost"
  size?: "xs" | "sm" | "md"
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  type?: "button" | "reset" | "submit"
  className?: string
}

const Button = ({
  children,
  color,
  variant,
  size = "md",
  onClick,
  isDisabled,
  isLoading,
  type,
  className,
  ...props
}: PropsWithChildren<TButtonProps>) => {
  return (
    <BaseButton
      data-accent-color={color}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(className, styles.button, styles[variant], styles[size])}
      data-is-loading={isLoading || false}
      type={type}
      {...props}
    >
      <div className={styles.loader} data-is-visible={isLoading || false}>
        <Loader />
      </div>

      {children}
    </BaseButton>
  )
}

export { Button }
