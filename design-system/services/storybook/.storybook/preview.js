// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
import "./style.css"
import "@jm/themes/themes.css"
// const isVisualTest = process.env.STORYBOOK_VISUAL_TEST === "true"; // ✅ 환경 변수 체크

const preview = {
  parameters: {
    // actions: isVisualTest ? undefined : { argTypesRegex: "^on[A-Z].*" }, // ✅ visual test에서는 비활성화
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: "body",
        attribute: "class",
        defaultState: {
          name: "light",
          value: "theme-light",
        },
        states: [
          {name: "dark", value: "theme-dark`"}
        ]
      },
    ]  
  },
};

export default preview;