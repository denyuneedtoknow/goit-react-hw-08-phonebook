import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/Users/users-operations"
import { useSelector } from "react-redux";
import { isAuthorized } from '../../redux/Users/users-selectors'
import { getUserName } from '../../redux/Users/users-selectors'
import s from "./Navigation.module.css";





const Navigation = () => {
    const isAuth = useSelector(isAuthorized)
    const username = useSelector(getUserName)

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logoutUser())
    }

    return (
        <div className={s.navigation}>
            {isAuth ?
                <>
                    <ul className={s.navMenu}>
                        <li className={s.navMenuItems}><NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>Contacts</NavLink></li>
                        <li className={s.navMenuItems}><NavLink to="/" className={s.link} activeclassname={s.activeLink}>Home</NavLink></li>
                        <li className={s.navMenuItems}><p className={s.link}>Welcome, {username}</p></li>
                        <li className={s.navMenuItems}><button type="button" className={s.addBtn} onClick={handleLogOut}>Log Out</button></li>
                    </ul>
                </> :
                <>
                    <ul className={s.navMenu}>
                        <li className={s.navMenuItems}><NavLink to="/login" className={s.link} activeclassname={s.activeLink}>Log In </NavLink></li>
                        <li className={s.navMenuItems}><NavLink to="/register" className={s.link} activeclassname={s.activeLink}>Registration</NavLink></li>
                    </ul>


                </>
            }

        </div>
    );
};

export default Navigation;