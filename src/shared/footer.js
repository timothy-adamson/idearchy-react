import React from "react"
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                A personal project site by Tim Adamson
            </div>
            <a href="https://github.com/timothy-adamson" target="_blank" rel="noopener noreferrer">
                <img src="/GitHub_Logo.png" alt="Link to my Github profile"></img>
            </a>
            <a href="https://www.linkedin.com/in/timothyadamson/" target="_blank" rel="noopener noreferrer">
                <img src="/Linkedin_Logo.png" alt="Link to my LinkedIn profile"></img>
            </a>
            <a href="http://timothyadamson.com">
                Portfolio
            </a>
        </footer>
    )
}

export default Footer