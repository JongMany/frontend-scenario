import { JSX } from "react"

type AsProps = {
  //  SVG 요소를 제외한 HTML 태그들만 허용
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>
}

// 기본적인 HTML 속성을 포함하지만 as prop은 제거한 타입
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps