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
                    <a className='projectIcon' href="https://employeelisttest.netlify.app/"> Employee List</a>
                    <br />
                    <br />
                    Employee List is an app that shows a list of names with profile info. There's also a search bar you can use to find each employee.
                    <br />
                    <br />
                    Note: The employees and their information are just placeholders.
                </li>
            </ul>
        </div>
    )
}

export default Projects;