import React, {Fragment,useEffect} from 'react';

import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from './styles/GlobalStyle';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Chatbar from "./Components/ChatBar/Chatbar";
import Login from "./Components/Login/Login";
import { useSelector,useDispatch} from "react-redux";
import {login, selectUser, logout} from "./features/app/appSlice";
import {auth} from "./firebase";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    username: authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [])

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
