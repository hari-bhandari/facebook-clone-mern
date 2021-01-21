import React from 'react';

import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from './styles/GlobalStyle';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Chatbar from "./Components/ChatBar/Chatbar";
function App() {
  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
            <Navbar/>
            <div className="app__body">
                <Sidebar />
                <Feed/>
                <Chatbar />

            </div>
        </ThemeProvider>
      </div>
  );
}

export default App;
