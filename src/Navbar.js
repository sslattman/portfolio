import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './styles.css';

const Navbar = () => {
    return (
        <div className="navbar"> {/* Use className instead of class */}
            <Link className="brand" to="/">Sage Lattman</Link>
            {/* <div className="brand">Sage Lattman</div> */}
            <div className="nav-links">
                <Link to="/journalism">Journalism</Link> {/* Correctly imported Link component */}
                <Link to="/creativewriting">Creative Writing</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;