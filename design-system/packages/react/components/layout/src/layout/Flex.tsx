import * as React from "react";
import { FlexProps } from "./types"
import {clsx} from "clsx";
import {  StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {as = "div", color, background, children} = props;    
  const {align, basis, direction, grow, justify, shrink, wrap, gap} = props
  

  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),    
    style: {
      display: 'flex',
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      flexWrap: wrap,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      gap,
      background:vars.colors.$scale?.[background]?.[100] || background,
      color: vars.colors.$scale?.[color]?.[700] || color,
      ...props.style
    }
  }, children);
}

const _Flex = React.forwardRef(Flex);
export {_Flex as Flex};