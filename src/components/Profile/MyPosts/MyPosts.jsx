import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post.jsx"

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

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