import React from "react";
import { Hat } from "./Image";
import { Pig } from "./Image";


const Profile = () => {
    return (
        <div className='content'>
            <img src={Hat}></img>
            <div>
                <img src={Pig} id="Pig"></img>
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
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
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