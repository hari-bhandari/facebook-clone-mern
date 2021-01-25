import React from 'react';
import Story from './Story';
import {StoriesContainer} from "./Story.CSS";
interface StoryInterface{
        image?:string,
        profileSrc?:string,
        title:string
}
const data:Array<StoryInterface>=[
    {image:"https://www.randomlists.com/img/things/cat.webp",profileSrc:"https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/jasmina_panovska-griffiths_crop.jpg?itok=Da5xMrTh",title:"Jasmine AK"},
    {image:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=300&q=80",profileSrc:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",title:"Jason"},
    {image:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",profileSrc:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",title:"Hari Bhand"},
    {image:"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=300&q=80",profileSrc:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",title:"David"}]

function Stories() {
    return (
        <StoriesContainer>
            {data.map((data:StoryInterface)=>(
                <Story
                    image={data.image}
                    profileSrc={data?.profileSrc}
                    title={data.title}
                />
            ))}
        </StoriesContainer>
    );
}

export default Stories;
