import React from 'react';
import styleCl from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'John Snowball' },
        { id: 2, name: 'Michael Smith' },
        { id: 3, name: 'Nicole Fieldsman' },
        { id: 4, name: 'Anthony Bids' },
        { id: 5, name: 'Simona Kris' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi. I am fine. And you?' },
        { id: 3, message: 'Never seen. What does it look like?' },
        { id: 4, message: 'Hey. I have passed my exam!' },
        { id: 5, message: 'No, actually not. What about you?' }
    ]

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />)

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