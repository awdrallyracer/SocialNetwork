import React from "react";
import state, { addPost } from "../../../Redux/state";
import p from './MyPosts.module.css';
import Post from "./Post/Post.jsx"

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter} addPost={addPost} />)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        console.log(state.profilePage.postsData);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
