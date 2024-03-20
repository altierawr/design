import clsx from "clsx"
import { PropsWithChildren } from "react"
import { Button, PressEvent } from "react-aria-components"
import { TColor } from "@/utils/colors"
import styles from "./base-button.module.css"

export type TBaseButtonProps = {
  color: TColor
  onPress?: (e: PressEvent) => void
  onPressStart?: (e: PressEvent) => void
  onPressEnd?: (e: PressEvent) => void
  isDisabled?: boolean
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const BaseButton = ({
  children,
  color,
  onPress,
  onPressStart,
  onPressEnd,
  isDisabled,
  className,
  ...props
}: PropsWithChildren<TBaseButtonProps>) => {
  return (
    <Button
      data-accent-color={color}
      onPress={onPress}
      onPressStart={onPressStart}
      onPressEnd={onPressEnd}
      isDisabled={isDisabled}
      className={clsx(className, styles.baseButton)}
      {...props}
    >
      {children}
    </Button>
  )
}

export { BaseButton }
