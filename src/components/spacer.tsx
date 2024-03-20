import clsx from "clsx"
import styles from "./spacer.module.css"

type TProps = {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"
  isHorizontal?: boolean
}

const Spacer = ({ size, isHorizontal }: TProps) => {
  return (
    <div
      data-size={size}
      data-orientation={isHorizontal && "horizontal"}
      className={clsx(styles.spacer)}
    />
  )
}

export { Spacer }
