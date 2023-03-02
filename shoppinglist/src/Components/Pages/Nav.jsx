import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink className="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="active" to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink className="active" to="/recipes">Recipes</NavLink>
                </li>
                <li>
                    <NavLink className="active" to="/list">Lists</NavLink>
                </li>
            </ul>
        </nav>
    );
}