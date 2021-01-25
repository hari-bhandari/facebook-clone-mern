import React, {Fragment} from 'react';

import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from './styles/GlobalStyle';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Chatbar from "./Components/ChatBar/Chatbar";
import Login from "./Components/Login/Login";

function App() {
    const user = null
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                {!user ? (<Login/>) :
                    (<Fragment>
                        <Navbar/>
                        <div className="app__body">
                            <Sidebar/>
                            <Feed/>
                            <Chatbar/>
                        </div>
                    </Fragment>
                    )}
            </ThemeProvider>
        </div>
);
}

export default App;
