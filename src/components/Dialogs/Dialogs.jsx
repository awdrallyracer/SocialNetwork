import React from "react";
import d from './Dialogs.module.css';
import { dialogsData } from "./Data/DialogData";
import { messagesData } from "./Data/DialogData";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
