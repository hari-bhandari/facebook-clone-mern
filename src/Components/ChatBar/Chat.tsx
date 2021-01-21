import React from 'react';
import { Avatar } from '@material-ui/core';
import {ChatRowContainer} from "./Chat.CSS";

interface SidebarRowProps{
    src?:string,
    title:string
}
const Chat:React.FC<SidebarRowProps> = ({src,title}) => {
    return (
        <ChatRowContainer>
            {src && <Avatar src={src}/>}
            <span>{title}</span>
        </ChatRowContainer>
    );
};

export default Chat;