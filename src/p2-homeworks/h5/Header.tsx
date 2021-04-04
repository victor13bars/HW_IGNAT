import React from "react";
import {NavLink} from "react-router-dom";
import s from "./HW5.module.css";
import {PATH} from "./Routes";
function Header() {
    return (
        <div>
            <ul className={s.navbar}>
                <li><a href="#">click on me</a>
                    <ul>
                        <NavLink to={PATH.PRE_JUNIOR} >Pre-junior</NavLink>
                        <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                       <NavLink to={PATH.MIDDLE}>Middle</NavLink>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Header;
