import React from 'react';
import {FeedContainer} from "./Feed.CSS";
import Stories from "./Stories/Stories";
import AddPost from "./AddPost";
import Post from "./Post/Post";

const Feed = () => {
    return (

        <FeedContainer>
            <Stories/>
            <AddPost/>
            <Post profilePic={"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} image={"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} username={"Hari NB"}  message={"What can i say?"} />
        </FeedContainer>
    );
};

export default Feed;