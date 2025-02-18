import * as React from "react";
import { AccordionButtonProps } from "./types";
import { clsx } from "clsx";

import { useButton } from "@jm/react-hooks-button";
import { useAccordionContext } from "./AccordionContext";
import { useCallback } from "react";
import { accordionButtonStyle } from "./styles.css";

const AccordionButton = (props: AccordionButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { className, itemName = '', onClick, children, ...rest } = props;

  const { setActiveItems } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItems(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItems],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
};

const _AccordionButton = React.forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };