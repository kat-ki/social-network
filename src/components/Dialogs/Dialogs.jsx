import React from 'react';
import styleCl from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} />)

    return (
        <div className={styleCl.dialogs}>
            <div className={styleCl.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styleCl.messages}>
                {messagesElements}
            </div>
        </div>


    )
}

export default Dialogs