import { useState } from "react"
import { BaseButton } from "./base-button"
import { Collapsible } from "./collapsible"

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BaseButton color="blue" onPress={() => setIsOpen(!isOpen)}>
        Toggle collapsible
      </BaseButton>

      <Collapsible isOpen={isOpen}>
        <p>Hello this is the collapsible content</p>
        <p>Hello this is the collapsible content</p>
        <p>Hello this is the collapsible content</p>
        <p>Hello this is the collapsible content</p>
        <p>Hello this is the collapsible content</p>
        <p>Hello this is the collapsible content</p>
      </Collapsible>
    </>
  )
}
