import { Toast as BaseToast } from "@base-ui/react";
import { CircleAlertIcon, CircleCheckIcon, CircleXIcon, InfoIcon, XIcon } from "lucide-react";

import { Button } from "./button";
import styles from "./toast.module.css";

const toastManager = BaseToast.createToastManager();

const Toast = () => {
  return (
    <BaseToast.Provider toastManager={toastManager}>
      <ToastStack />
    </BaseToast.Provider>
  );
};

const ToastStack = () => {
  const { toasts } = BaseToast.useToastManager();

  return (
    <BaseToast.Portal>
      <BaseToast.Viewport className={styles.viewport}>
        {toasts.map((toast) => (
          <BaseToast.Root key={toast.id} toast={toast} className={styles.toast} swipeDirection={["up", "right"]}>
            <BaseToast.Content className={styles.content}>
              {toast.type && <ToastIcon type={toast.type}>{icons[toast.type]}</ToastIcon>}
              <div className={styles.contentBody}>
                <BaseToast.Title className={styles.title} />
                <BaseToast.Description className={styles.description} />
              </div>
              <BaseToast.Action className={styles.action} render={<Button size="sm" />} {...toast.actionProps} />
              <BaseToast.Close className={styles.close}>
                <XIcon />
              </BaseToast.Close>
            </BaseToast.Content>
          </BaseToast.Root>
        ))}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
};

type TToastIconProps = {
  type?: string;
  children: React.ReactNode;
};

const ToastIcon = ({ type, children }: TToastIconProps) => {
  return (
    <div className={styles.icon} data-type={type}>
      {children}
    </div>
  );
};

const icons: Record<string, React.ReactNode> = {
  info: <InfoIcon />,
  success: <CircleCheckIcon />,
  warning: <CircleAlertIcon />,
  error: <CircleXIcon />,
};

export { Toast, toastManager };
