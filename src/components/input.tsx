import { Input as BaseInput } from "@base-ui/react"
import clsx from "clsx"
import { ComponentProps } from "react"
import styles from "./input.module.css"

type TProps = ComponentProps<typeof BaseInput> & {
  className?: string
  isDisabled?: boolean
  placeholder?: string
}

const Input = ({ className, isDisabled, placeholder, ...props }: TProps) => {
  return (
    <BaseInput
      data-accent-color="gray"
      disabled={isDisabled}
      placeholder={placeholder}
      className={clsx(styles.input, className)}
      {...props}
    />
  )
}

export { Input }
