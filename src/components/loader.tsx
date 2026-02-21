import clsx from "clsx";
import { type CSSProperties } from "react";

import styles from "./loader.module.css";

type TProps = {
  className?: string;
  size?: number;
};

const Loader = ({ className, size = 20 }: TProps) => {
  const style = {
    "--loader-size": `${size}px`,
  } as CSSProperties;

  return (
    <div data-accent-color="gray" className={clsx(styles.loader, className)} style={style}>
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
