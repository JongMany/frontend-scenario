import * as React from "react"
import { AccordionItemProps } from "./types"
import { clsx } from "clsx";
import { accordionItemStyle } from "./styles.css";

const AccordionItem = (props: AccordionItemProps, ref: React.Ref<HTMLDivElement>) => {
  const { itemName, children, className, ...rest} = props;

  const childrenWithProps = React.Children.toArray(children);
  const accordionItemChildren = childrenWithProps.map((child) => {
    
    if(React.isValidElement(child) && typeof child.type !== "string") {
      return React.cloneElement(child, {
        ...(child.props as any),
        itemName
      })
    }
    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  )
}

const _AccordionItem = React.forwardRef(AccordionItem);

export {
  _AccordionItem as AccordionItem,
};
