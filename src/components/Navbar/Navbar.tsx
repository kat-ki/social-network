import React from 'react';
import styleCl from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styleCl.nav}>
            <div className={styleCl.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styleCl.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={styleCl.item}>
                <a href="/news">News</a>
            </div>
            <div className={styleCl.item}>
                <a href="/music">Music</a>
            </div>
            <div className={styleCl.item}>
                <a href="/settings">Settings</a>
            </div>
        </div>
    )
}

export default Navbar;