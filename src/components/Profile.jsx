import React from "react";
import { Hat } from "./Image";
import { Pig } from "./Image";
import p from './Profile.module.css';


const Profile = () => {
    return (
        <div className={p.content}>
            <img src={Hat} className={p.hat}></img>
            <div>
                <img src={Pig} className={p.pig}></img>
            </div>

            <div>
                <div>
                    Свиня джакузі.gif
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={p.posts}>
                        <div className={p.item}>
                            Post 1
                        </div>
                        <div className={p.item}>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

//Ctrl + K + C