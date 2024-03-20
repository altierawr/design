import clsx from "clsx"
import { PropsWithChildren } from "react"
import { BaseButton, TBaseButtonProps } from "./base-button"
import styles from "./icon-button.module.css"

type TProps = TBaseButtonProps & {
  variant: "solid" | "surface" | "soft" | "outline" | "ghost"
}

const IconButton = ({
  color,
  variant,
  onPress,
  onPressStart,
  onPressEnd,
  isDisabled,
  children,
}: PropsWithChildren<TProps>) => {
  return (
    <BaseButton
      color={color}
      onPress={onPress}
      onPressStart={onPressStart}
      onPressEnd={onPressEnd}
      isDisabled={isDisabled}
      className={clsx(styles.iconButton, styles[variant])}
    >
      {children}
    </BaseButton>
  )
}

export { IconButton }
