import React from "react";
import { NavLink } from "react-router-dom";
import d from './DialogItem.module.css';
import { Pig } from "../../Image/Image";

const DialogItem = (props) => {
    return (
        <div className={d.dialogItems}>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => isActive ? d.active : d.dialogItems} >
                <img src={Pig} className={d.img}></img> {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;