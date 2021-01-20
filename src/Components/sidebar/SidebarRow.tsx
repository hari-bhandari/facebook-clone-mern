import React from 'react';
import { Avatar } from '@material-ui/core';
interface SidebarRowProps{
    src?:string,
    Icon?:any,
    title:string
}
const SidebarRow:React.FC<SidebarRowProps> = ({src,Icon,title}) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    );
};

export default SidebarRow;