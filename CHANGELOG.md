# @awlt/design

## 0.5.0

### Minor Changes

- e21ceab: Changed `IconButton` component to accept the icon as a child component instead of as a prop

## 0.4.0

### Minor Changes

- b7ae66d: Changed `Tabs.List` component to scroll horizontally when running out of space instead of wrapping to multiple lines

### Patch Changes

- c9c984b: Fixed an issue where `Tabs.TabSeparator` was not being rendered properly
- 4c4aa67: Fixed an issue with `Input` component getting zoomed in on iOS mobile devices when focused by increasing font size on small screens to 16px

## 0.3.0

### Minor Changes

- a6ab4c8: Added `className` prop to `Spacer` component
- fc6b8f6: Added new `size` variants to `Tabs` component and improved its styling

## 0.2.0

### Minor Changes

- 3ec1cab: Renamed `Menu.Content` -> `Menu.Popup` with new `side` prop
- 40a00a1: Changed components to use more rounding & cursor pointer if they're clickable

### Patch Changes

- f114352: Fixed an issue with the `Tabs` component where it would get broken if no `defaultValue` was passed

## 0.1.1

### Patch Changes

- d14137c: Fixed an issue where the library files were not being bundled into the package

## 0.1.0

### Minor Changes

- 5d7d2dd: Optimize bundle size by externalizing dependecies & using a separate css file for each component

  BREAKING CHANGE: @awlt/design/components.css was removed
