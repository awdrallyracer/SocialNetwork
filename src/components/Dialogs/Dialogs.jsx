import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state from "../../Redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData.map(m => <Message text={m.text} id={m.id} addMessage={props.addMessage} />);

    let newMessage = React.createRef();

    let postNewMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>

                {dialogsElements}

            </div>
            <div className={d.messages}>

                {messagesElements}

            </div>

            <div>
                <textarea placeholder="Type  new message" ref={newMessage}></textarea>
                <div>
                    <button onClick={postNewMessage}>Send</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;
