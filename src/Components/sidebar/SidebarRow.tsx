import React from 'react';
import { Avatar } from '@material-ui/core';
import {SidebarRowContainer} from "./Sidebar.CSS";

interface SidebarRowProps{
    src?:string,
    Icon?:any,
    title:string
}
const SidebarRow:React.FC<SidebarRowProps> = ({src,Icon,title}) => {
    return (
        <SidebarRowContainer>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </SidebarRowContainer>
    );
};

export default SidebarRow;