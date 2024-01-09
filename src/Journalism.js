import React from "react";
import crimson from './images/crimson.png'
import './styles.css';
import Navbar from "./Navbar";
import Footer from './Footer';

const Journalism = () => {
    return (
        <div>
            <Navbar />
            <div className="journalism-container">
            <div className="about">
                <div className="crimson">
                    <img src={crimson} width={350} />
                </div>
                <div className="aboutme">
                    Since my first year at college, I've been a writer for the
                    Harvard Crimson. I write for both the Crimson's news coverage
                    and for its longform magazine, Fifteen Minutes. I also serve
                    as an editor for fifteen minutes. Below are selections of my
                    favorite articles I've written, but check out my <a href="https://www.thecrimson.com/writer/1217375/Sage_S._Lattman/">writer
                    page</a> for the full list!
                </div>
        </div>
                <div className="articles">
                    <p>2023</p>
                    <ul>
                        <li><a href="https://www.thecrimson.com/article/2023/11/9/sage-bikes-with-graham/">On the Run with Graham Blanks</a></li>
                        <li><a href="https://www.thecrimson.com/article/2023/11/9/sage-bikes-with-graham/">Claim, Explained</a></li>
                        <li><a href="">Lessons in Rat Embalming</a></li>
                        <li><a href="">What’s Going On With Embedded EthiCS?</a></li>
                        <li><a href="">What We Talk About When We Talk About Math 55</a></li>
                        <li><a href="">Ex-HUFPI President Denies Financial Misconduct, But Club Says More Than Half of Funds Still Missing</a></li>
                        <li><a href="">Behind the Scenes at Lowell Tea</a></li>
                    </ul>
                    <p>2022</p>
                    <ul>
                    <li><a href="">‘Deborah Was All About the Truth’: Remembering Deborah Batts, the First Openly Gay Federal Judge</a></li>
                    <li><a href="">How David Foster Grew the Harvard Forest to New Heights</a></li>
                    <li><a href="">The Cricket Queens of Harvard</a></li>
                    </ul>
                    <p>2021</p>
                    <ul>
                    <li><a href="">The Three-Year Battle to Join the Harvard Band</a></li>
                    <li><a href="">Houghton's Renovation Welcomes the Public</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Journalism;