import { PropsWithChildren } from "react"
import styles from "./collapsible.module.css"

type TProps = {
  isOpen?: boolean
}

const Collapsible = ({ children, isOpen }: PropsWithChildren<TProps>) => {
  return (
    <div data-opened={isOpen || undefined} className={styles.collapsible}>
      <div>{children}</div>
    </div>
  )
}

export { Collapsible }
