import { Button as BaseButton } from "@base-ui/react";
import clsx from "clsx";
import { ArrowLeftFromLineIcon } from "lucide-react";
import {
  createContext,
  InputHTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { Tooltip } from ".";
import styles from "./sidebar.module.css";

const SidebarCollapsedContext = createContext<{
  isCollapsed: boolean;
  isManualCollapsible: boolean;
  isAutoCollapsed: boolean;
  collapseManually: () => void;
  expandManually: () => void;
}>({
  isCollapsed: false,
  isManualCollapsible: false,
  isAutoCollapsed: false,
  collapseManually: () => {},
  expandManually: () => {},
});

type TCommonProps = {
  className?: string;
} & PropsWithChildren;

type TRootProps = {
  isManualCollapsible?: boolean;
  isAutoCollapsible?: boolean;
  autoCollapseThreshold?: number;
} & TCommonProps &
  InputHTMLAttributes<HTMLDivElement>;

// Tailwind's lg breakpoint
const DEFAULT_AUTO_COLLAPSE_THRESHOLD = 1024;

const Root = ({
  className,
  children,
  isManualCollapsible = false,
  isAutoCollapsible = false,
  autoCollapseThreshold = DEFAULT_AUTO_COLLAPSE_THRESHOLD,
  ...props
}: TRootProps) => {
  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window === "undefined" ? Number.POSITIVE_INFINITY : window.innerWidth,
  );

  useEffect(() => {
    if (!isManualCollapsible) {
      setIsManuallyCollapsed(false);
    }
  }, [isManualCollapsible]);

  useEffect(() => {
    if (!isAutoCollapsible || typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isAutoCollapsible]);

  const isAutoCollapsed = isAutoCollapsible && windowWidth < autoCollapseThreshold;
  const isCollapsed = isAutoCollapsed || isManuallyCollapsed;

  const collapseManually = () => {
    if (!isManualCollapsible || isAutoCollapsed) {
      return;
    }

    setIsManuallyCollapsed(true);
  };

  const expandManually = () => {
    if (!isManualCollapsible || isAutoCollapsed) {
      return;
    }

    setIsManuallyCollapsed(false);
  };

  return (
    <SidebarCollapsedContext
      value={{
        isCollapsed,
        isManualCollapsible,
        isAutoCollapsed,
        collapseManually,
        expandManually,
      }}
    >
      <aside className={clsx(styles.root, className)} data-is-collapsed={isCollapsed} {...props}>
        {children}
      </aside>
    </SidebarCollapsedContext>
  );
};

const Header = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed, isManualCollapsible, collapseManually } = useContext(SidebarCollapsedContext);

  const handleCollapseButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    collapseManually();
  };

  return (
    <header className={clsx(styles.header, className)} data-is-collapsed={isCollapsed} {...props}>
      {children}
      {isManualCollapsible && (
        <BaseButton
          className={styles.headerCollapseButton}
          data-is-collapsed={isCollapsed}
          onClick={handleCollapseButtonClick}
        >
          <ArrowLeftFromLineIcon size={16} strokeWidth={1.5} />
        </BaseButton>
      )}
    </header>
  );
};

const HeaderLogo = ({ className, children, ...props }: TCommonProps & BaseButton.Props) => {
  const { isCollapsed, isManualCollapsible, isAutoCollapsed, expandManually } = useContext(SidebarCollapsedContext);
  const canExpandManually = isCollapsed && isManualCollapsible && !isAutoCollapsed;

  const handleLogoClick = () => {
    if (isCollapsed) {
      expandManually();
    }
  };

  return (
    <BaseButton
      className={clsx(styles.headerLogo, className)}
      data-is-collapsed={isCollapsed}
      data-can-expand-manually={canExpandManually}
      onClick={handleLogoClick}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

const HeaderLogoSquareImage = ({
  className,
  children,
  ...props
}: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed, isAutoCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <div
      className={clsx(styles.headerLogoImage, className)}
      data-is-collapsed={isCollapsed}
      data-is-auto-collapsed={isAutoCollapsed}
      {...props}
    >
      {children}
    </div>
  );
};

const Content = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx(styles.content, className)} {...props}>
      {children}
    </div>
  );
};

type TGroupProps = {
  variant?: "compact" | "normal";
} & TCommonProps;

const Group = ({
  variant = "normal",
  className,
  children,
  ...props
}: TGroupProps & InputHTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={clsx(styles.group, className)} data-variant={variant} {...props}>
      {children}
    </section>
  );
};

const GroupHeader = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
  const { isCollapsed } = useContext(SidebarCollapsedContext);

  return (
    <div className={clsx(styles.groupHeader, className)} data-is-collapsed={isCollapsed} {...props}>
      {children}
    </div>
  );
};

const GroupTitle = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
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

const List = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={clsx(styles.list, className)} {...props}>
      {children}
    </ul>
  );
};

type TItemProps = {
  tooltip?: string;
} & TCommonProps;

const Item = ({ tooltip, className, children, ...props }: TItemProps & InputHTMLAttributes<HTMLLIElement>) => {
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

const Footer = ({ className, children, ...props }: TCommonProps & InputHTMLAttributes<HTMLDivElement>) => {
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
