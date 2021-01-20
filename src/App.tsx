import React from 'react';

import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from './styles/GlobalStyle';
import Navbar from "./Components/Navbar";

function App() {
  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
            <Navbar/>
        </ThemeProvider>
      </div>
  );
}

export default App;
