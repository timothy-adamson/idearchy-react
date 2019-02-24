import React from "react"
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navTitle">
                idearchy
            </div>
            <div className="navOption">
                Today's Trees
            </div>
            <div className="navOption">
                Archive
            </div>
            <div className="navOption">
                About
            </div>
        </nav>
    )
}

export default Navbar