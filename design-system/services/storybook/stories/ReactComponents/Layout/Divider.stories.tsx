import * as React from 'react';
import "@jm/react-components-layout/style.css"
import { Box, Divider as _Divider } from "@jm/react-components-layout"
import { vars } from "@jm/themes"

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => <Box padding={3} style={{width: '300px', height: '300px'}}><Story /></Box>
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select"
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select"
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select"
    }
  },
}

export const DividerStory = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  }
}