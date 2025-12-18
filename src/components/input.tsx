import { Input as BaseInput } from "@base-ui/react"
import clsx from "clsx"
import { Camera, LucideProps } from "lucide-react"
import {
  cloneElement,
  ComponentProps,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
} from "react"
import styles from "./input.module.css"
import { Loader } from "./loader"

type TProps = ComponentProps<typeof BaseInput> & {
  leftIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  className?: string
}

const Input = ({
  leftIcon,
  isLoading,
  className,
  isDisabled,
  placeholder,
  ...props
}: TProps) => {
  const IconLeft = leftIcon

  return (
    <div data-accent-color="gray" className={styles.container}>
      {IconLeft !== undefined && !isLoading && (
        <IconLeft size={20} strokeWidth={1.5} className={styles.iconLeft} />
      )}
      {isLoading && (
        <div className={styles.loaderContainer}>
          <Loader className={styles.loader} />
        </div>
      )}
      <BaseInput
        disabled={isDisabled}
        placeholder={placeholder}
        className={clsx(
          styles.input,
          (leftIcon || isLoading) && styles.inputWithLeftIcon,
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
