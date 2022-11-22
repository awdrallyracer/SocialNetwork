import React from "react";
import p from './Post.module.css';


const Post = () => {
    return (
        <div className={p.item}>
            <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg" className={p.img}></img>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;

//Ctrl + K + C