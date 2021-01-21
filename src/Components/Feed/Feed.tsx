import React from 'react';
import {FeedContainer} from "./Feed.CSS";
import Stories from "./Stories/Stories";

const Feed = () => {
    return (

        <FeedContainer>
            <Stories/>
        </FeedContainer>
    );
};

export default Feed;