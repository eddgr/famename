import React from 'react';
import {Link} from 'react-router-dom';

/**
 * This is where the NavBar lives
 */
export default function NavBar() {
    return (
        <ul
            className="nav fixed-bottom bg-light row justify-content-center align-items-center text-center"
            style={{height: '50px'}}
        >
            <li className="nav-item col-4">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item col-4">
                <Link to="/compare" className="nav-link">
                    Compare
                </Link>
            </li>
            <li className="nav-item col-4">
                <Link to="/rank" className="nav-link">
                    Rank
                </Link>
            </li>
        </ul>
    );
}
