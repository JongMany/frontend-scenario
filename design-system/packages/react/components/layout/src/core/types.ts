import { JSX } from "react"
import { StyleSprinkles } from "./style.css";
import { vars } from "@jm/themes";

type AsProps = {
  //  SVG 요소를 제외한 HTML 태그들만 허용
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>
}

// 기본적인 HTML 속성을 포함하지만 as prop은 제거한 타입
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

// "as" Props 대응
export type AsElementProps = AsProps & ElementProps;

// "color" Props 대응 (일단 색상이 많아 vanilla extract로 관리 X)
export type ColorProps = {
  // color?: keyof typeof vars.colors.$scale | string;
  color?: keyof typeof vars.colors.$scale;
  // background?:keyof typeof vars.colors.$scale | string;
  background?:keyof typeof vars.colors.$scale;
}

// "dynamic style" 대응
export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;