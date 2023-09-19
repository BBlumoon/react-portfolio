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
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                    <h1>About Me</h1>
                    <div>Hello my name is Colin Moon and I am currently attending the Rutgers Coding Bootcamp. Right now, I am 18 years old and live in New Jersey.</div>
            </div>
        </div>
    )
}

export default Home