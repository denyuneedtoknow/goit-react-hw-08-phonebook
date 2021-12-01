import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/Users/users-operations"
import { useSelector } from "react-redux";
import { isAuthorized, getIsRefreshing } from '../../redux/Users/users-selectors'
import { getUserName } from '../../redux/Users/users-selectors'
import s from "./Navigation.module.css";





const Navigation = () => {
    const isAuth = useSelector(isAuthorized)
    const username = useSelector(getUserName)
    const isReloading = useSelector(getIsRefreshing)
    const active = {
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 700,
    }
    const notActive = {
        color: '#00008b',
        textDecoration: 'none',
        fontWeight: 700,
    }
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutUser())
    }

    return (
        !isReloading &&
        <div className={s.navigation}>
            {isAuth ?
                <>
                    <ul className={s.navMenuAuth}>
                        <li className={s.navMenuItems}><NavLink to="/contacts" style={({ isActive }) => isActive ? active : notActive}>Contacts</NavLink></li>
                        <li className={s.navMenuItems}><NavLink to="/" style={({ isActive }) => isActive ? active : notActive}>Home</NavLink></li>
                        <li className={s.navMenuItems}><p className={s.navMenuSentense}>Welcome, <span className={s.username}>{username}</span></p></li>
                        <li className={s.navMenuItems}><button type="button" className={s.addBtn} onClick={handleLogOut}>Log Out</button></li>
                    </ul>
                </> :
                <>
                    <ul className={s.navMenuUnAuth}>
                        <li>
                            <div className={s.navMenuThumb}>
                                <p className={s.navMenuSentenseUnAuth}>Please</p>
                                <NavLink to="/login" style={({ isActive }) => isActive ? active : notActive} >Log In </NavLink>
                            </div >
                        </li>
                        <li>
                            <div className={s.navMenuThumb}>
                                <p className={s.navMenuSentenseUnAuth}>or</p>
                                <NavLink to="/register" style={({ isActive }) => isActive ? active : notActive} >Register</NavLink>
                            </div>
                        </li>
                    </ul>


                </>
            }

        </div>
    );
};

export default Navigation;