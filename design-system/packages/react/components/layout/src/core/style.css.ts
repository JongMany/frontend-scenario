import { vars } from "@jm/themes";
import { style } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';


export const BaseStyle = style({
  padding: 0,
  margin: 0,

  // @ts-ignore - tab 등으로 포커스를 줄 때
  "&:focus-visible": {
    outline: "none",

    boxShadow: vars.box.shadows.outline,
  },
});

export const MarginAndPaddingProperties = defineProperties({
    conditions: {
    default: {},
  },
  defaultCondition: "default",
  properties: {
    marginTop: vars.box.spacing,
    marginRight: vars.box.spacing,
    marginBottom: vars.box.spacing,
    marginLeft: vars.box.spacing,
    paddingTop: vars.box.spacing,
    paddingRight: vars.box.spacing,
    paddingBottom: vars.box.spacing,
    paddingLeft: vars.box.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const BorderStyleProperties = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: "default",
  properties: {
    borderRadius: vars.box.radii,
  },
});

export const BoxShadowStyleProps = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: "default",
  properties: {
    boxShadow: vars.box.shadows,
  },
});

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProps,
);

