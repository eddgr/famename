import React from 'react';
import {Link} from 'react-router-dom';

/**
 * This is where the NavBar lives
 */
export default function NavBar() {
    return (
        <div style={{position: 'fixed', bottom: '0'}}>
            <Link to="/">Home</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/rank">Rank</Link>
        </div>
    );
}
