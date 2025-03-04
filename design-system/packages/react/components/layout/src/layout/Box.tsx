import * as React from "react";
import { BoxProps } from "./types"
import {clsx} from "clsx";
import {  BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const {as = "div", color, background, children} = props;    

  

  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([BaseStyle, StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),    
    style: {
      background: background && vars.colors.$scale?.[background]?.[100],
      color: color && vars.colors.$scale?.[color]?.[700],
      ...props.style
    }
  }, children);
}

const _Box = React.forwardRef(Box);
export {_Box as Box};