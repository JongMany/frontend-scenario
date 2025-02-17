import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

// export type ButtonHTMLElement = HTMLButtonElement | HTMLAnchorElement | HTMLInputElement | HTMLDivElement | HTMLSpanElement 

export type BaseButtonProps<T extends ButtonElementType = 'button'> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  }
}

// Function Overload
export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
}