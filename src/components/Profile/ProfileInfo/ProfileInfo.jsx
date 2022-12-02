import React from "react";
import { Hat } from "../../Image/Image";
import { Pig } from "../../Image/Image";
import p from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <img src={Hat} className={p.hat}></img>
            <div>
                <img src={Pig} className={p.pig}></img>
            </div>

            <div>
                <div className={p.descriptionBlock}>
                    Свиня джакузі.gif
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;
