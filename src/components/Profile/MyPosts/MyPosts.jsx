import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post.jsx"


const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' likeCounter='5' />
                <Post message="It's my first post" likeCounter='10' />
            </div>
        </div>

    )
}

export default MyPosts;

//Ctrl + K + C