import * as React from "react";
import { GridItemProps } from "./types"
import {clsx} from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";

const GridItem = (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
  const {as = "div", color, background, children} = props;    
  const {area, colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart} = props;
  

  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([BaseStyle,StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),    
    style: {
      gridArea: area,
      gridColumnEnd: colEnd,
      gridColumnSpan: colSpan,
      gridColumnStart: colStart,
      gridRowEnd: rowEnd,
      gridRowSpan: rowSpan,
      gridRowStart: rowStart,      
      background: background && vars.colors.$scale?.[background]?.[100],
      color: color && vars.colors.$scale?.[color]?.[700],
      ...props.style
    }
  }, children);
}

const _GridItem = React.forwardRef(GridItem);
export {_GridItem as GridItem};