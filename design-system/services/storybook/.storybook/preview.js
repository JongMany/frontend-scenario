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

const isVisualTest = process.env.STORYBOOK_VISUAL_TEST === "true"; // ✅ 환경 변수 체크

const preview = {
  parameters: {
    actions: isVisualTest ? undefined : { argTypesRegex: "^on[A-Z].*" }, // ✅ visual test에서는 비활성화
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export default preview;