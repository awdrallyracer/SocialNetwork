import React from "react";
import p from './Post.module.css';


const Post = (props) => {

    //console.log(props.message);

    return (
        <div className={p.item}>
            <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg" className={p.img}></img>
            {props.message}
            <div>
                <span> Likes: </span>  {props.likeCounter}
            </div>
        </div>
    )
}

export default Post;

//Ctrl + K + C