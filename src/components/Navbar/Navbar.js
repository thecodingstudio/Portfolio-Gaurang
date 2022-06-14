import React from "react";

import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {

    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Gaurang</div>  
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="services-main" className="Serv" smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contact 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;