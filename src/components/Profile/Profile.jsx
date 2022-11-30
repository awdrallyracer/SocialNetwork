import React from "react";
import { Hat } from "../Image/Image";
import { Pig } from "../Image/Image";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx"


const Profile = () => {
    return (
        <div>
            <img src={Hat} className={p.hat}></img>
            <div>
                <img src={Pig} className={p.pig}></img>
            </div>

            <div>
                <div>
                    Свиня джакузі.gif
                </div>
                <div>
                    <MyPosts />
                </div>
            </div>
        </div>
    )
}

export default Profile;

//Ctrl + K + C