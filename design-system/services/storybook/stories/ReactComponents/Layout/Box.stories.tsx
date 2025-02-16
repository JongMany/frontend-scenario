import "@jm/react-components-layout/style.css"
import {Box as _Box} from "@jm/react-components-layout"
import { background } from "@storybook/theming"

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  args: {},
}

export const BoxStory = {
  args: {
    as: 'button',
    padding: "5",
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: "md",
  }
}