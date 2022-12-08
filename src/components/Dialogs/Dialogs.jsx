import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />); 

    let messagesElements = props.state.messagesData.map(m => <Message text={m.text} />);

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
