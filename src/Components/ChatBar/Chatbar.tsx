import React from 'react';
import {ChatContainer, ChatbarHeader} from "./Chat.CSS";
import Chat from "./Chat";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Chatbar() {
    return (
        <ChatContainer>
            <ChatbarHeader>
                    <h2>Contacts</h2>
                <div>
                        <VideoCallIcon/>
                        <SearchIcon/>
                        <MoreHorizIcon/>
                </div>
            </ChatbarHeader>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
            <Chat title={"Hari Bhandari"} src={"assas"}/>
        </ChatContainer>
    );
}

export default Chatbar;
