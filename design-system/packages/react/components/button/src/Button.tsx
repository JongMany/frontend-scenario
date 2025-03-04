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
import { useButton } from '../../../hooks/button/src/useButton';

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {buttonProps} = useButton(props);
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    children,
    isLoading,
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




  return (
    <button
      {...buttonProps}
      role="button"
      // 스타일 
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
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
