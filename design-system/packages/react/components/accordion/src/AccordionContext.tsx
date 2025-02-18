import { createContext, useContext } from "react";

export type AccordionContextType = {
  activeItems: string[];
  setActiveItems: (item: string) => void;  
}

const AccordionContext = createContext<AccordionContextType>({
  activeItems: [],
  setActiveItems: () => {},
});

export const useAccordionContext = () => {
  return useContext(AccordionContext);
}

export default AccordionContext;