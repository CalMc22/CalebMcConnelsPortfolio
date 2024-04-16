import { React } from 'react'

function Projects() {
    return (
        <div className="projects">
            <h1 className='title'>Projects</h1>
            <ul >
                <li>
                    <a className='projectIcon' href="https://typebattles.netlify.app/" > Type Battles</a>
                    <br />
                    <br />
                    Type Battles is a unique take on the game "Rock, Paper, Scissors", using the classic Pokemon types: Grass, Fire, and Water.
                    <br />
                    <br />
                    How to play?
                    <br />
                    <br />
                    You are given three options to choose from: Grass, Fire, and Water.
                    <br />
                    Each type has an advantage over each other as shown below:
                    <br />
                    <br />
                    Grass beats Water
                    <br />
                    Fire beats Grass
                    <br />
                    Water beats Fire
                    <br />
                    <br />
                    Your goal is to beat the Computer Trainer's chosen type with the type of your own but neither of you know what type you chose until you both picked a type.
                    <br />
                    The Trainer with the most wins in 6 moves wins the game!
                    <br />
                    If both Trainers choose the same type, it will result in a tie which will not grant a score for either Trainer.
                </li>
                <br />
                <li>
                    <a className='projectIcon' href="https://fortniteitemshop.netlify.app/">Fortnite Item Shop</a>
                    <br />
                    <br />
                    This shop uses a Fortnite API to grab and display the current cosmetics in the Fortnite Item Shop.
                </li>
                <br />
                <li>
                    <a className='projectIcon' href="https://employeelisttest.netlify.app/"> Employee List</a>
                    <br />
                    <br />
                    Employee List is an app that shows a list of names with profile info. There's also a search bar you can use to find each employee.
                    <br />
                    <br />
                    Note: The employees and their information are just placeholders.
                </li>
                <br />
                <li>
                    <a className='projectIcon' href="https://www.fortnite.com/@krysos22"> UEFN Projects</a>
                    <br />
                    <br />
                    I am extremely passionate about making unique gaming experiences as well and thanks to Epic Games for giving players the opportunity to make their own games in UEFN, a version of Unreal Enigine where you can submit your projects into Fortnite! I have been making projects for fun for about 4 years now and since the release of UEFN about a year ago, my projects and passion for creativing these games has grown so much more! Check out my <a href="https://www.fortnite.com/@krysos22">Creator Profile</a> if you would like to see what I made!
                </li>
            </ul>
        </div>
    )
}

export default Projects;