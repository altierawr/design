# Alt Design

An open-source, accessible UI component library for React.

## Installation

The library is available on npm. Use your favorite package manager to install it:

```bash
pnpm add @awlt/design
```

## Usage

**Documentation is WIP**.

First, import the styles in a global .css file. This includes the `styles.css` file as well as any colors you want to use:

```css
@import "@awlt/design/styles.css";
@import "@awlt/design/colors/blue.css";
@import "@awlt/design/colors/slate.css";
@import "@awlt/design/colors/green.css";
@import "@awlt/design/colors/yellow.css";
@import "@awlt/design/colors/red.css";
```

Then, import and use any components in your code:

```typescript
import { Button } from "@awlt/design";

const MyComponent = () => {
  return <Button>Click me</Button>
}
```

There is no list of components in documentation as of now; you can browse the `components` directory for now to see what components are available.

### Tailwind
For tailwind v4+, you should set spacing variables like this:

```css
@theme {
  --spacing-*: initial;
  --spacing-0: 0px;
  --spacing-1: var(--space-1);
  --spacing-2: var(--space-2);
  --spacing-3: var(--space-3);
  --spacing-4: var(--space-4);
  --spacing-5: var(--space-5);
  --spacing-6: var(--space-6);
  --spacing-7: var(--space-7);
  --spacing-8: var(--space-8);
  --spacing-9: var(--space-9);
  --spacing-10: var(--space-10);
  --spacing-11: var(--space-11);
  --spacing-12: var(--space-12);
}
```

## Running locally

First, install pnpm if you haven't already. Open your terminal and run:

```bash
npm install -g pnpm
```

Then, install the dependencies:

```bash
pnpm install
```

Then, run storybook:

```bash
pnpm storybook
```

And to build:

```bash
pnpm build
```

OR

```bash
pnpm build:w
```
