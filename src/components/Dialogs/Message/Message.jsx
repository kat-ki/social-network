import React from 'react';
import styleCl from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={styleCl.message}>{props.message}</div>
    )
}


export default Message;