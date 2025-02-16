import "@jm/react-components-layout/style.css"
import {Text as _Text} from "@jm/react-components-layout"
import { classes, vars } from "@jm/themes"

export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select"
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select"
    }
  },
}

export const TextStory = {
  args: {
    as: 'p',
    fontSize: 'sm',
    children: 'Hello World',
    color: 'gray'
  }
}