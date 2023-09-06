import React from 'react';
import styleCl from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={styleCl.dialogs}>
            <div className={styleCl.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styleCl.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <div>
                    <textarea
                        name=""
                        id=""
                        cols="25"
                        rows="3"
                        placeholder={'Type your text'}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>


    )
}

export default Dialogs