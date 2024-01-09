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
                <div className="heading">
                    <h2>If you'd like to get to know me better or are interested in my work, please reach out!</h2>
                </div>
                <form className="form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />

                    <label htmlFor="message">Message</label>
                    <textarea cdkTextareaAutosize id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;