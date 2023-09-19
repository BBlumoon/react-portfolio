import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import '../styles/footer.css'

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
        </div>
        <p> &copy; 2023 BBlumoon</p>
    </div>
}

export default Footer