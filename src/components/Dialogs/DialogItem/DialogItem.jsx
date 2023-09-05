import React from 'react';
import styleCl from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styleCl.dialog + ' ' + styleCl.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;