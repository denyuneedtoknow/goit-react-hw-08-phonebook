import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/Users/users-operations"
import { useSelector } from "react-redux";
import { isAuthorized } from '../../redux/Users/users-selectors'
import s from "./Navigation.module.css";





const Navigation = () => {
    const isAuth = useSelector(isAuthorized)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logoutUser())
    }

    return (
        <div className={s.navigation}>
            {isAuth ?
                <>
                    <NavLink to="/" className={s.link} activeclassname={s.activeLink}>Home</NavLink>
                    <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>Contacts</NavLink>
                    <button type="button" onClick={handleLogOut}>Log Out</button>
                </> :
                <>
                    <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>Log In </NavLink>
                    <NavLink to="/register" className={s.link} activeclassname={s.activeLink}>Registration</NavLink></>}


        </div>
    );
};

export default Navigation;