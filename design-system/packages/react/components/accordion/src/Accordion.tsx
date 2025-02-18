import * as React from "react";
import { useState } from "react";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import {clsx} from "clsx";
import { accordionStyle } from "./styles.css";

const Accordion = (props: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const {children, defaultActiveItems = [], className, style, ...rest} = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter(activeItem => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  }
  return (
    <AccordionContext.Provider value={{
      activeItems,
      setActiveItems: handleSetActiveItem,
    }}>
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])} style={{...style}}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const _Accordion = React.forwardRef(Accordion)

export {
  _Accordion as Accordion,  
};
