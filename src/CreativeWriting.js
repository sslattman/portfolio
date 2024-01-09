import React from "react";
import crimson from './images/crimson.png'
import './styles.css';
import Navbar from "./Navbar";
import Footer from './Footer';

const CreativeWriting = () => {
    return (
        <div>
            <Navbar />
                <div className="writing-container">
                    <h1>My Work</h1>
                    <div className="description">
                        In my free time, I love to work on my own writing projects.
                        I've written plays, shortfilms, and short stories. My work is
                        listed below, and please feel free to reach out if you'd like to
                        see anything!
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default CreativeWriting;