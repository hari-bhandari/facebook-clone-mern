import { Avatar } from '@material-ui/core';
import React from 'react';
import {StoryContainer} from "./Story.CSS";

interface SidebarRowProps{
    image?:string,
    profileSrc?:any,
    title:string
}

const Story:React.FC<SidebarRowProps>=({ image, profileSrc, title })=> {
    return (
        <StoryContainer style={{ backgroundImage: `url(${image})` }} >
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </StoryContainer>
    );
}

export default Story;
