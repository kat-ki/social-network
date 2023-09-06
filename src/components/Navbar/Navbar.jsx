import React from 'react';
import styleCl from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styleCl.nav}>
            <div className={styleCl.item}>
                <NavLink to="/profile" activeClassName={styleCl.activeLink}>Profile</NavLink>
            </div>
            <div className={styleCl.item}>
                <NavLink to="/dialogs" activeClassName={styleCl.activeLink}>Messages</NavLink>
            </div>
            <div className={styleCl.item}>
                <NavLink to="/friends" activeClassName={styleCl.activeLink}>Friends</NavLink>
            </div>
            <div className={styleCl.item}>
                <NavLink to="/news" activeClassName={styleCl.activeLink}>News</NavLink>
            </div>
            <div className={styleCl.item}>
                <NavLink to="/music" activeClassName={styleCl.activeLink}>Music</NavLink>
            </div>
            <div className={styleCl.item}>
                <NavLink to="/settings" activeClassName={styleCl.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;