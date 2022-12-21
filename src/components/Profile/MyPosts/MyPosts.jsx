import React from "react";
import state, { addPost, updateNewPostText } from "../../../Redux/state";
import p from './MyPosts.module.css';
import Post from "./Post/Post.jsx"

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter} addPost={addPost} updateNewPostText={updateNewPostText} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.addPost();
    };

    let onChangePost = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChangePost} ></textarea>
                </div>
                <div>
                    <button onClick={addNewPost} >Add post</button>
                </div>
            </div>
            <div className={p.postsBlock}>

                {postsElements}

            </div>
        </div>

    )
}

export default MyPosts;
