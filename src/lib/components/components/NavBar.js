import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * This is where the NavBar lives
 */
export default function NavBar() {
    return (
        <ul
            className="nav nav-pills fixed-bottom bg-light row justify-content-center align-items-center text-center"
            style={{height: '50px'}}
        >
            <li className="nav-item col-4">
                <NavLink
                    exact={true}
                    to="/"
                    activeClassName="active"
                    className="nav-link"
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item col-4">
                <NavLink
                    to="/compare"
                    activeClassName="active"
                    className="nav-link"
                >
                    Compare
                </NavLink>
            </li>
            <li className="nav-item col-4">
                <NavLink
                    to="/rank"
                    activeClassName="active"
                    className="nav-link"
                >
                    Rank
                </NavLink>
            </li>
        </ul>
    );
}
