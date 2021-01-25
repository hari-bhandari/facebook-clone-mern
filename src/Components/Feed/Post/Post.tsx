import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import {PostBottom,PostContainer,PostTop,Options} from './Post.CSS'

interface Props{
    id:string,
    data:PostProps
}
interface PostProps{
    [index:string]:string,
    timestamp?:any
}

const Post:React.FC <Props>= ({data}) => {
    const { profilePic, image, username, timestamp, message }=data
    return (
        <PostContainer>
            <PostTop>
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </PostTop>
            <PostBottom>
                <p>{message}</p>
            </PostBottom>
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <Options>
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </Options>
        </PostContainer>
    );
};

export default Post;