import * as React from "react";
import { GridProps } from "./types"
import {clsx} from "clsx";
import {  BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@jm/themes";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {as = "div", color, background, children} = props;    
  const {autoColumns, autoFlow, autoRows, column, columnGap, gap, row, rowGap, templateAreas, templateColumns, templateRows} = props;
  

  return React.createElement(as, {
    ...props,
    ref,
    className: clsx([BaseStyle,StyleSprinkles(extractSprinkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),    
    style: {
      display: 'grid',
      gridAutoColumns: autoColumns,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridColumn: column,
      gridColumnGap: columnGap,
      gridGap: gap,
      gridRow: row,
      gridRowGap: rowGap,
      gridTemplateAreas: templateAreas,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,     
      background: background && vars.colors.$scale?.[background]?.[100],
      color: color && vars.colors.$scale?.[color]?.[700],
      ...props.style
    }
  }, children);
}

const _Grid = React.forwardRef(Grid);
export {_Grid as Grid};