import React from "react";
import headshot from './images/headshot.jpg'
import './styles.css';
import Navbar from "./Navbar";
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="headshot">
                    <img src={headshot} width={350} />
                </div>
                <div className="aboutme">
                    <h2>Hi, I’m Sage Lattman</h2>
                    <p>I’m a junior at Harvard studying history with a secondary in computer science. Outside of the classroom, I’m a writer and editor for The Harvard Crimson, and I also am a tech board member of The Harvard Advocate.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;