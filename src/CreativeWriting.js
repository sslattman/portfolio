import React from "react";
import crimson from './images/crimson.png'
import './styles.css';
import Navbar from "./Navbar";
import Footer from './Footer';
import greatwalk from './images/greatwalk.png';

const CreativeWriting = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="headshot">
                    <img src={greatwalk} width={350} />
                </div>
                <div className="aboutme">
                    <p>In my free time, I love to work on my own writing projects.
                        I've written plays, shortfilms, and short stories. My work is
                        listed below, and please feel free to reach out if you'd like to
                        see anything!</p>
                     <p>I've written three one-act plays: Encoded (2020), Conventional (2023),
                        and How to Befriend an Ex (2023).
                     </p>
                     <p>I also write short stories: How to Become an Old Lady by the Age of Seventeen (2020),
                        <i> If You're Not Having a Good Time, Go</i> (2020), and <i>Little Phones, Little Rooms (2023).</i>
                     </p>
                     <p>In the spring of 2022, I wrote and directed a short film called <i>Great Walk</i> which you can watch <a href="https://youtu.be/l1WEY231lDs" target="_blank">here</a>.</p>
                     <p>Please email me if you'd like to read my work!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CreativeWriting;