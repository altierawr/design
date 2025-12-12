import { Button as BaseButton } from "@base-ui/react"
import clsx from "clsx"
import { PropsWithChildren } from "react"
import { TColor } from "@/utils/colors"
import styles from "./button.module.css"

export type TButtonProps = {
  color: TColor
  onClick?: () => void
  isDisabled?: boolean
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Button = ({
  children,
  color,
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
      className={clsx(className, styles.button)}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export { Button }
