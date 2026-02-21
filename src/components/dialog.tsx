import { Dialog as BaseDialog } from "@base-ui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { Button } from "./button";
import styles from "./dialog.module.css";

const createHandle = BaseDialog.createHandle;

const Root = ({ children, ...props }: BaseDialog.Root.Props) => {
  return <BaseDialog.Root {...props}>{children}</BaseDialog.Root>;
};

const Trigger = ({ className, children, ...props }: BaseDialog.Trigger.Props) => {
  return (
    <BaseDialog.Trigger className={clsx(styles.trigger, className)} {...props}>
      {children}
    </BaseDialog.Trigger>
  );
};

const Popup = ({ className, children, ...props }: BaseDialog.Popup.Props) => {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className={styles.backdrop} />
      <BaseDialog.Popup className={clsx(styles.popup, className)} {...props}>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
};

type TClassNameProps = {
  className?: string;
};

const Header = ({ className, children, ...props }: PropsWithChildren & TClassNameProps) => {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      {children}
    </header>
  );
};

const Body = ({ className, children, ...props }: PropsWithChildren & TClassNameProps) => {
  return (
    <div className={clsx(styles.body, className)} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ className, children, ...props }: PropsWithChildren & TClassNameProps) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      {children}
    </footer>
  );
};

const Title = ({ className, children, ...props }: BaseDialog.Title.Props) => {
  return (
    <BaseDialog.Title className={clsx(styles.title, className)} {...props}>
      {children}
    </BaseDialog.Title>
  );
};

const Description = ({ className, children, ...props }: BaseDialog.Description.Props) => {
  return (
    <BaseDialog.Description className={clsx(styles.description, className)} {...props}>
      {children}
    </BaseDialog.Description>
  );
};

const Close = ({ className, children, ...props }: BaseDialog.Close.Props) => {
  return (
    <BaseDialog.Close
      className={clsx(styles.close, className)}
      render={
        <Button variant="ghost" color="gray">
          {children}
        </Button>
      }
      {...props}
    />
  );
};

export { createHandle, Root, Trigger, Popup, Header, Body, Footer, Title, Description, Close };
