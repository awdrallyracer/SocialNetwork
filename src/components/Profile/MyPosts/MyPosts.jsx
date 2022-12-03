import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post.jsx"


const MyPosts = () => {

    let postsData = [
        { message: "Hi, how are you?", likeCounter: '5' },
        { message: "It's my first post", likeCounter: '10' }
    ];

    let postsElements = postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.postsBlock}>

                {postsElements}

            </div>
        </div>

    )
}

export default MyPosts;

//Ctrl + K + C