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
        </FeedContainer>
    );
};

export default Feed;