import React from 'react';
import styleCl from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styleCl.dialog + ' ' + styleCl.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;