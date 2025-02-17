import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { vars } from "@jm/themes";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    children,
    isLoading,
    isDisabled,
    onKeyDown,
    style,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if( event.key === "Enter" || event.key === '13') {
      event.preventDefault();
      event.currentTarget.click();
    }
  }

  const disabled = isDisabled || isLoading;

  return (
    <button
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      onKeyDown={handleKeyDown}
      role="button"
      data-loading={isLoading}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({size})}></div>}
      {leftIcon && <span className={spanStyle({size})}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({size})}>{rightIcon}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
