import React from 'react'
import { Link } from "react-router-dom"
import "./nav.css"

export default function Nav() {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="navwrapper">
                        <div className="navleft">
                            <img className='logo' src="images/logo.png" alt="" />
                        </div>
                        <div className="navright">
                            <ul className='mymanu'>
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/blog">blog</Link></li>
                                <li><Link to="/contact">contact</Link></li>
                                <li><Link to="/projects">projects</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
