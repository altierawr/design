import { AlertDialog as BaseAlertDialog } from "@base-ui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { Button } from "./button";
import styles from "./dialog.module.css";

const createHandle = BaseAlertDialog.createHandle;

const Root = ({ children, ...props }: BaseAlertDialog.Root.Props) => {
  return <BaseAlertDialog.Root {...props}>{children}</BaseAlertDialog.Root>;
};

const Trigger = ({ children, ...props }: BaseAlertDialog.Trigger.Props) => {
  return <BaseAlertDialog.Trigger {...props}>{children}</BaseAlertDialog.Trigger>;
};

const Popup = ({ className, children, ...props }: BaseAlertDialog.Popup.Props) => {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className={styles.backdrop} />
      <BaseAlertDialog.Popup className={clsx(styles.popup, className)} {...props}>
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
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

const Title = ({ className, children, ...props }: BaseAlertDialog.Title.Props) => {
  return (
    <BaseAlertDialog.Title className={clsx(styles.title, className)} {...props}>
      {children}
    </BaseAlertDialog.Title>
  );
};

const Description = ({ className, children, ...props }: BaseAlertDialog.Description.Props) => {
  return (
    <BaseAlertDialog.Description className={clsx(styles.description, className)} {...props}>
      {children}
    </BaseAlertDialog.Description>
  );
};

const Close = ({ className, children, ...props }: BaseAlertDialog.Close.Props) => {
  return (
    <BaseAlertDialog.Close
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
