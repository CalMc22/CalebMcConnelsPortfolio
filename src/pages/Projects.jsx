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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nobis dolores tenetur quae unde minima ipsum totam distinctio sed, non quos, architecto ullam placeat. Ducimus totam impedit odit rerum saepe.
                </li>
                <br />
                <li>
                    <a className='projectIcon' href="https://employeelisttest.netlify.app/"> Employee List</a>
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad adipisci magni fugit modi sunt cumque ipsa rem temporibus libero aperiam vitae saepe quos magnam maxime mollitia, laboriosam quaerat autem.
                </li>
            </ul>
        </div>
    )
}

export default Projects;