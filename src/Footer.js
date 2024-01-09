import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './styles.css';

const Footer = () => {
    return (
        <div className="footer"> {/* Use className instead of class */}
            <div className="text">© 2023 Sage Lattman</div>
        </div>
    );
}

export default Footer;