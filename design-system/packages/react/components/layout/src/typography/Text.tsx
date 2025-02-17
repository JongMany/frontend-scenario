import * as React from "react";
import { TextProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as = "p", children, color = "gray", background, fontSize } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx(
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        props.className,
      ),
      style: {
        background: background
          ? vars.colors.$scale?.[background]?.[100]
          : background,
        color: vars.colors.$scale?.[color]?.[700] || color,
        ...props.style,
      },
    },
    children,
  );
};

const _Text = React.forwardRef(Text);
export { _Text as Text };
