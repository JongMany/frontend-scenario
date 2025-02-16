import "@jm/react-components-layout/style.css"
import {Flex as _Flex} from "@jm/react-components-layout"
import * as React from "react";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  args: {},
}

export const FlexStory = {
  args: {
    as: 'div',
    padding: "5",
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: "md",    
    justify: "space-between",
    style: {
      width: '300px'
    }
  },
  render: (args) => {
    return <_Flex {...args}>
      <div>Content</div>
      <div>Content</div>
    </_Flex>
  }
}