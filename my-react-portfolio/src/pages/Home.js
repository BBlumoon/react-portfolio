import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import '../styles/home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
            <h2> Hi, my name is Colin</h2>
            <div className="prompt">
                <p>Currently a Rutgers coding bootcamp student</p>
                <LinkedInIcon/>
                <EmailIcon/>
                <GithubIcon/>
            </div>
            </div>
        </div>
    )
}

export default Home