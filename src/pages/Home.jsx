import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <h1 className='title'>Home</h1>
            <ul>
                <li>
                    Welcome to Caleb McConnell's Portfolio!
                </li>
                <br />
                <li>
                    I am an aspiring Frontend Web Developer/Game Developer with a passion to create fun and user friendly experiences for anyone!
                    <br />
                    <br />
                    I'm thrilled to transition into the world of Junior Software Engineering. I have a background in woodworking, that has honed my attention to detail, precision, and problem-solving skills. I also have gained skills in HTML, CSS, Javascript, and REACT.js from Per Scholas. I feel that my background in both these fields allows me to offer a unique blend of skills and qualities that can benefit any team.
                    <br />
                    <br />
                    I am also extremely passionate about making unique gaming experiences as well and thanks to Epic Games for giving players the opportunity to make their own games in UEFN, a version of Unreal Enigine where you can submit your projects into Fortnite! I have been making projects for fun for about 4 years now and since the release of UEFN about a year ago, my projects and passion for creativing these games has grown so much more!
                </li>
                <br />
                <br />
                <li>Check out some <Link to="/projects">projects</Link> I worked on!</li>
            </ul>
        </div>
    );
};

export default Home;
