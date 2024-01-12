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
                    as an editor for Fifteen Minutes. Last year, my story <a target="_blank" href="https://www.thecrimson.com/article/2023/3/3/hufpi-harvard-student-group-money-dispute/">"‘Still Unresolved’: Harvard Student Group Missing Approximately $30,000 After Leadership Dispute"</a> recieved
                    an honorable mention for the Associated College Press Best In-Depth story of 2023. Below are selections of my
                    favorite articles I've written, but check out my <a target="_blank" href="https://www.thecrimson.com/writer/1217375/Sage_S._Lattman/">writer
                    page</a> for the full list!
                </div>
        </div>
                <div className="articles">
                    <p>2023</p>
                    <ul>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/11/9/sage-bikes-with-graham/">On the Run with Graham Blanks</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/11/9/sage-bikes-with-graham/">Claim, Explained</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/9/28/lessons-in-rat-embalming/">Lessons in Rat Embalming</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/4/20/embedded-ethics-CS/">What’s Going On With Embedded EthiCS?</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/3/26/behind-math-55/">What We Talk About When We Talk About Math 55</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/3/3/hufpi-harvard-student-group-money-dispute/">Ex-HUFPI President Denies Financial Misconduct, But Club Says More Than Half of Funds Still Missing</a></li>
                        <li><a target="_blank" href="https://www.thecrimson.com/article/2023/2/9/lowell-tea-history-behind-scenes/">Behind the Scenes at Lowell Tea</a></li>
                    </ul>
                    <p>2022</p>
                    <ul>
                    <li><a target="_blank" href="https://www.thecrimson.com/article/2022/6/28/deborah-batts-federal-judge/">‘Deborah Was All About the Truth’: Remembering Deborah Batts, the First Openly Gay Federal Judge</a></li>
                    <li><a target="_blank" href="https://www.thecrimson.com/article/2022/3/31/david-foster-harvard-forest/">How David Foster Grew the Harvard Forest to New Heights</a></li>
                    <li><a target="_blank" href="https://www.thecrimson.com/article/2022/2/10/cricket-queens-chirps/">The Cricket Queens of Harvard</a></li>
                    </ul>
                    <p>2021</p>
                    <ul>
                    <li><a target="_blank" href="https://www.thecrimson.com/article/2021/11/4/band-goes-coed/">The Three-Year Battle to Join the Harvard Band</a></li>
                    <li><a target="_blank" href="https://www.thecrimson.com/article/2021/11/4/houghton-renovations/">Houghton's Renovation Welcomes the Public</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Journalism;