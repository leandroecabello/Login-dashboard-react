import React from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig' 
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
