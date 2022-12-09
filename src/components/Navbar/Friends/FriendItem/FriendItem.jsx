import React from "react";
import { Pig } from "../../../Image/Image";
import f from "./FriendItem.module.css"

const FriendItem = (props) => {
    return (
        <div className={f.div}>
            <img src={Pig} className={f.img} /> 
            <div className={f.text}>
             {props.name}
            </div>
        </div>
    )
}

export default FriendItem;