import React from 'react';
import styleCl from './../Dialogs.module.css'


export type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styleCl.message}>{props.message}</div>
    )
}


export default Message;