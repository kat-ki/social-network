import React from 'react';
import styleCl from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m: { message: string; }) => <Message message={m.message} />)

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