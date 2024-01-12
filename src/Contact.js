import React from "react";
import crimson from './images/crimson.png'
import './styles.css';
import Navbar from "./Navbar";
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className="text">
                    <h2>Let's talk!</h2>
                    <p>Please reach out to me at sagelattman@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;