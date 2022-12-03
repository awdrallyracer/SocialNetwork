import React from "react";
import { NavLink } from "react-router-dom";
import d from './Dialogs.module.css';
import { dialogsData } from "./DialogData";
import { messagesData } from "./DialogData";


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

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />); 

    let messagesElements = messagesData.map(m => <Message text={m.text} />);

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>

                { dialogsElements }

            </div>
            <div className={d.messages}>
                
                { messagesElements }

            </div>
        </div>

    )
}

export default Dialogs;
