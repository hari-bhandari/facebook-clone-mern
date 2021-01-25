import React,{useEffect,useState} from 'react';
import {FeedContainer} from "./Feed.CSS";
import Stories from "./Stories/Stories";
import AddPost from "./AddPost";
import Post from "./Post/Post";
import {db} from "../../firebase";
interface PostInterface{
    id:string,
    data?:Data
}
interface Data{
    [key: string]: string|object
}
const Feed = () => {
    const [posts, setPosts] = useState<Array<PostInterface>>([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
    }, [])
    return (

        <FeedContainer>
            <Stories/>
            <AddPost/>
            {posts.map((post:any)=>(
                    <Post id={post.id} data={post.data} />
                ))}
        </FeedContainer>
    );
};

export default Feed;