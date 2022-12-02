import React from "react";
import { NavLink } from "react-router-dom";
import d from './Dialogs.module.css';


const DialogItem = (props) => {
    return (
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <DialogItem name="Andrii" id="1" />
                <DialogItem name="Anton" id="2" />
                <DialogItem name="Ilia" id="3" />
            </div>
            <div className={d.messages}>
                <Message text="Hi" />
                <Message text="How you doing?" />
                <Message text="Let's drink some coffee tomorrow" />

            </div>
        </div>

    )
}

export default Dialogs;
