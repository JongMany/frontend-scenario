import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { vars } from "@jm/themes";
import styled from "@emotion/styled";

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

const View = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Text>텍스트!</Text>
      <Text2>굿!</Text2>
    </>
  );
};

const Text = styled.p`
  color: ${({ theme }) => {
    // @ts-ignore
    return theme.colors.red[900];
  }};
`;

const Text2 = styled.p`
  color: ${vars.colors.$static.light.red[200]};
`;
