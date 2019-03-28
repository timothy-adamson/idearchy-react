import React from "react"
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar = (props) => {

    return (
        <nav>
            <Link to="/" className="navTitle">
                idearchy
            </Link>
            <NavLink to="/trees" className="navOption">
                This Weeks Tree
            </NavLink>
            <NavLink to="/archive" className="navOption">
                Archive
            </NavLink>
            <NavLink to="/about" className="navOption" >
                About
            </NavLink>
        </nav>
    )
}

export default Navbar