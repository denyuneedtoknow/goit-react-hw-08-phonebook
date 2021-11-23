import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <NavLink exact to="/" className={s.link} activeclassname={s.activeLink}>
                Home
            </NavLink>
            <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
                Log In
            </NavLink>
            <NavLink to="/register" className={s.link} activeclassname={s.activeLink}>
                Registration
            </NavLink>
            <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>
                Contacts
            </NavLink>
        </div>
    );
};

export default Navigation;