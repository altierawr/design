import { Button as BaseButton } from "@base-ui/react";
import clsx from "clsx";
import { ArrowLeftFromLineIcon } from "lucide-react";
import { createContext, MouseEvent, PropsWithChildren, useContext, useState } from "react";

import { Tooltip } from ".";
import styles from "./sidebar.module.css";

const SidebarCollapsedContext = createContext<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

type TCommonProps = {
  className?: string;
} & PropsWithChildren;

const Root = ({ className, children, ...props }: TCommonProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SidebarCollapsedContext
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      <aside className={clsx(styles.root, className)} data-is-collapsed={isCollapsed} {...props}>
        {children}
      </aside>
    </SidebarCollapsedContext>
  );
};

const Header = ({ className, children, ...props }: TCommonProps) => {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarCollapsedContext);

  const handleCollapseButtonClick = (e: MouseEvent) => {
    if (isCollapsed) {
      e.preventDefault();
      return;
    }

    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className={clsx(styles.header, className)} data-is-collapsed={isCollapsed} {...props}>
      {children}
      <BaseButton
        className={styles.headerCollapseButton}
        data-is-collapsed={isCollapsed}
        onClick={handleCollapseButtonClick}
      >
        <ArrowLeftFromLineIcon size={16} strokeWidth={1.5} />
      </BaseButton>
    </header>
  );
};

const HeaderLogo = ({ className, children, ...props }: TCommonProps) => {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarCollapsedContext);

  const handleLogoClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  return (
    <BaseButton
      className={clsx(styles.headerLogo, className)}
      data-is-collapsed={isCollapsed}
      onClick={handleLogoClick}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

const HeaderLogoSquareImage = ({ className, children, ...props }: TCommonProps) => {
  return (
    <div className={clsx(styles.headerLogoImage, className)} {...props}>
      {children}
    </div>
  );
};

const Content = ({ className, children, ...props }: TCommonProps) => {
  return (
    <div className={clsx(styles.content, className)} {...props}>
      {children}
    </div>
  );
};

type TGroupProps = {
  variant?: "compact" | "normal";
} & TCommonProps;

const Group = ({ variant = "normal", className, children, ...props }: TGroupProps) => {
  return (
    <section className={clsx(styles.group, className)} data-variant={variant} {...props}>
      {children}
    </section>
  );
};

const GroupHeader = ({ className, children, ...props }: TCommonProps) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <div className={clsx(styles.groupHeader, className)} data-is-collapsed={isCollapsed} {...props}>
      {children}
    </div>
  );
};

const GroupTitle = ({ className, children, ...props }: TCommonProps) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <div className={clsx(styles.groupTitle, className)} data-is-collapsed={isCollapsed} {...props}>
      {children}
    </div>
  );
};

type TGroupActionProps = {
  tooltip?: string;
} & BaseButton.Props;

const GroupAction = ({ tooltip, className, children, ...props }: TGroupActionProps) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          render={
            <BaseButton className={clsx(styles.groupAction, className)} data-is-collapsed={isCollapsed} {...props}>
              {children}
            </BaseButton>
          }
        />
        {tooltip && <Tooltip.Popup side="right">{tooltip}</Tooltip.Popup>}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const List = ({ className, children, ...props }: TCommonProps) => {
  return (
    <ul className={clsx(styles.list, className)} {...props}>
      {children}
    </ul>
  );
};

type TItemProps = {
  tooltip?: string;
} & TCommonProps;

const Item = ({ tooltip, className, children, ...props }: TItemProps) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger
            render={
              <li className={clsx(styles.item, className)} data-is-collapsed={isCollapsed} {...props}>
                {children}
              </li>
            }
          />
          {isCollapsed && tooltip && <Tooltip.Popup side="right">{tooltip}</Tooltip.Popup>}
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

type TItemButtonProps = {
  isActive?: boolean;
} & BaseButton.Props;

const ItemButton = ({ isActive, className, children, ...props }: TItemButtonProps) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <BaseButton
      className={clsx(styles.itemButton, className)}
      data-is-active={isActive || false}
      data-is-collapsed={isCollapsed}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

const Footer = ({ className, children, ...props }: TCommonProps) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      {children}
    </footer>
  );
};

export {
  Root,
  Header,
  HeaderLogo,
  HeaderLogoSquareImage,
  Content,
  Group,
  GroupHeader,
  GroupTitle,
  GroupAction,
  List,
  Item,
  ItemButton,
  Footer,
};
