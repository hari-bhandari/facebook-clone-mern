import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NavbarContainer,NavbarLeft,NavbarCenter,NavbarRight} from './Navbar.CSS'
import logo from './facebook.svg'
const Navbar:React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarLeft>
                <svg viewBox="0 0 36 36" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4" fill="url(#jsc_s_2)"
                     height="40" width="40">
                    <defs>
                        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                            <stop offset="0%" stop-color="#0062E0"></stop>
                            <stop offset="100%" stop-color="#19AFFF"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                    <path fill="white"
                          d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                </svg>
                <div className="input">
                    <SearchIcon className={"searchIcon"} />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </NavbarLeft>
            <NavbarCenter>
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCirceIcon fontSize="large" />
                </div>
            </NavbarCenter>
            <NavbarRight>
                <div className="header__info">
                    <Avatar />
                    <h4>Hari</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </NavbarRight>
        </NavbarContainer>
    );
};

export default Navbar;