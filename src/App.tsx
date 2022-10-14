import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </TasksContextProvider>
  );
}

export default App;
