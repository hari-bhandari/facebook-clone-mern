import React, {useState} from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import {AddPostContainer,PostContainerBottom,PostContainerTop} from "./AddPost.CSS";
import firebase from 'firebase'
import {db} from "../../firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/app/appSlice";


const AddPost = () => {
    const user = useSelector(selectUser)

    const [input, setInput] = useState<string>('');
    const [inputURL, setInputURL] = useState<string>('');
    const handleSubmit = (e:any) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user?.profilePic,
            username: user?.username,
            image: inputURL
        })

        setInput('');
        setInputURL('');
    };
    return (
        <AddPostContainer>
            <PostContainerTop>
                <Avatar src={""}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="messageSender__input"
                        placeholder={`What's on your mind, Hari?`}
                    />
                    <input
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                        type="text"
                        placeholder="Image URL (Optional)"
                    />
                    <button  type="submit" onClick={handleSubmit}>
                        Hidden Button
                    </button>
                </form>
            </PostContainerTop>
            <PostContainerBottom>
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </PostContainerBottom>
        </AddPostContainer>
    );
};

export default AddPost;