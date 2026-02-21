import { Input as BaseInput } from "@base-ui/react";
import clsx from "clsx";
import { ComponentProps, ComponentType, Fragment } from "react";

import { TIconProps } from "@/utils/types";

import styles from "./input.module.css";
import { Loader } from "./loader";

type TProps = ComponentProps<typeof BaseInput> & {
  errors?: (string | undefined)[];
  leftIcon?: ComponentType<TIconProps>;
  placeholder?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Input = ({ errors, leftIcon, isLoading, className, isDisabled, placeholder, ...props }: TProps) => {
  const IconLeft = leftIcon;

  return (
    <div>
      <div data-accent-color="gray" className={styles.container}>
        {IconLeft !== undefined && !isLoading && <IconLeft size={20} strokeWidth={1.5} className={styles.iconLeft} />}
        {isLoading && (
          <div className={styles.loaderContainer}>
            <Loader size={20} />
          </div>
        )}
        <BaseInput
          disabled={isDisabled}
          placeholder={placeholder}
          data-has-error={errors && errors.length > 0}
          className={clsx(styles.input, (leftIcon || isLoading) && styles.inputWithLeftIcon, className)}
          {...props}
        />
      </div>

      {errors?.map((error, idx) => (
        <Fragment key={`${error}-${idx}`}>{error && <p className={styles.errorMessage}>{error}</p>}</Fragment>
      ))}
    </div>
  );
};

export { Input };
