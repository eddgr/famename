import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

/**
 * This is where the NavBar lives
 */
export default function NavBar() {
    const renderMenuItems = (path, icon) => {
        return (
            <li className="nav-item col-4">
                <NavLink
                    exact={true}
                    to={path}
                    activeClassName="active"
                    className="nav-link"
                >
                    <i className={`fas ${icon}`}></i>
                </NavLink>
            </li>
        );
    };

    return (
        <ul
            className="nav nav-pills fixed-bottom bg-light row justify-content-center align-items-center text-center"
            style={{height: '50px'}}
        >
            {renderMenuItems('/', 'fa-home')}
            {renderMenuItems('/compare', 'fa-search')}
            {renderMenuItems('/rank', 'fa-fire')}
        </ul>
    );
}

NavBar.propTypes = {
    /**
     * Props being passed down from parent
     */
    props: PropTypes.node,
};
