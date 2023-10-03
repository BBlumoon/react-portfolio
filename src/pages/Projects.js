import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from '../assets/catcafehome.png'
import Proj2 from '../assets/pokemon-screenshot.png'

import '../styles/project.css'

function Projects() {
    return(
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                <ProjectItem name='Pokemon Dashboard' image={Proj1}/>
                <ProjectItem name='Cat Cafe' image={Proj2}/>
                <ProjectItem name='Trip Tracker' image={Proj2}/>
                <ProjectItem name='Placeholder' image={Proj2}/>
                <ProjectItem name='Placeholder' image={Proj2}/>
                <ProjectItem name='Placeholder' image={Proj2}/>
            </div>

            <h2>Links</h2>
            <div className="projects">
            <a href="https://github.com/Sergrojas29/Purrfect-Cat-Cafe" target="_blank" rel="noopener noreferrer">Cat Cafe Github</a>
            <a href="https://github.com/SethMunoz339/pokemon-dashboard" target="_blank" rel="noopener noreferrer">Pokemon Dashboard Github</a>
            <a href="https://fakelink.com" target="_blank" rel="noopener noreferrer">Placeholder Links</a>
            <a href="https://fakelink.com" target="_blank" rel="noopener noreferrer">Placeholder Links</a>
            <a href="https://fakelink.com" target="_blank" rel="noopener noreferrer">Placeholder Links</a>
            <a href="https://fakelink.com" target="_blank" rel="noopener noreferrer">Placeholder Links</a>
            </div>
        </div>
    )
}

export default Projects