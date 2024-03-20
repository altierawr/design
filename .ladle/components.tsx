import type { GlobalProvider } from "@ladle/react"
import clsx from "clsx"
import * as React from "react"
import "./styles.css"

export const Provider: GlobalProvider = ({ children }) => (
  <div
    // Automatic dark mode
    className={clsx(
      document.getElementsByTagName("html")[0].getAttribute("data-theme") ===
        "dark" && "dark"
    )}
  >
    {children}
  </div>
)
