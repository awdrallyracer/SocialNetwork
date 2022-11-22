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
                <Post />
                <Post />
            </div>
        </div>

    )
}

export default MyPosts;

//Ctrl + K + C