import React from "react";
import "@jm/react-components-button/style.css";
import { Button as _Button } from "@jm/react-components-button";
import { useButton, useToggleButton } from "@jm/react-hooks-button";
import { vars } from "@jm/themes";
import { Text } from "@jm/react-components-layout";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: true,
    leftIcon: "😀",
  },
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: 'div',
      onClick: () => {
        alert("ttt")
      },
    });

    return <Text {...buttonProps} as="div" fontSize="md" color="green" style={{userSelect: "none", cursor: "pointer"}}>텍스트 버튼입니다.</Text>
  }
}

export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton({
      elementType: 'button',
      onClick: () => {
        alert("ttt")
      },
    }, false);

    return <_Button {...buttonProps} variant={isSelected ? "solid" : "outline"} color="green">
      {isSelected ? "😀" : "🤣"}
    </_Button>
  }
}