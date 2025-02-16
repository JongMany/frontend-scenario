import * as React from "react";
import { GridItemProps } from "./types"
import {clsx} from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";

const GridItem = (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
  const {as = "div", color, background, children} = props;    
  const {area, colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart} = props;
  

  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),    
    style: {
      gridArea: area,
      gridColumnEnd: colEnd,
      gridColumnSpan: colSpan,
      gridColumnStart: colStart,
      gridRowEnd: rowEnd,
      gridRowSpan: rowSpan,
      gridRowStart: rowStart,      
      background:vars.colors.$scale?.[background]?.[100] || background,
      color: vars.colors.$scale?.[color]?.[700] || color,
      ...props.style
    }
  }, children);
}

const _GridItem = React.forwardRef(GridItem);
export {_GridItem as GridItem};