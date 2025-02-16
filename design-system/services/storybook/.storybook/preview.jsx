

import { themes } from "@storybook/theming";

import { withThemeByClassName } from "@storybook/addon-themes"; // ✅ 테마 변경을 위한 Addon
import "./style.css"
import "@jm/themes/themes.css"

const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme-light", // ✅ HTML `<html>` 태그에 클래스 추가
        dark: "theme-dark",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark, // ✅ Storybook Docs 테마 설정
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light Mode" },
          { value: "dark", title: "Dark Mode" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

const initTheme = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }

  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  });
};

initTheme();


export default preview;