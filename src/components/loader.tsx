import clsx from "clsx";

import styles from "./loader.module.css";

type TProps = {
  className?: string;
};

const Loader = ({ className }: TProps) => {
  return (
    <div data-accent-color="gray" className={clsx(styles.loader, className)}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export { Loader };
