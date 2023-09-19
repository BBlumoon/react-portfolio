import React from "react";
import ProjectItem from "../components/ProjectItem";

function Projects() {
    return(
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                <ProjectItem name='Pokemon Dashboard'/>
                <ProjectItem name='Cat Cafe'/>
            </div>
        </div>
    )
}

export default Projects