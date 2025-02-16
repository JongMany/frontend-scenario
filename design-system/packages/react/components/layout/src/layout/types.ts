import { vars } from "@jm/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant: "solid" | "dashed"
} & React.HTMLAttributes<HTMLHRElement>;

export type FlexProps = BoxProps &{
  align?: CSSProperties['alignItems'],
  basis?: CSSProperties['flexBasis'],
  direction?: CSSProperties['flexDirection'],
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'],
  wrap?: CSSProperties['flexWrap'],
  justify?: CSSProperties['justifyContent'],
  gap?: number,
   
}