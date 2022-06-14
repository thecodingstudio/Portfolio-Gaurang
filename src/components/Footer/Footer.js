import React from "react";

import "./Footer.css";

// import Wave from '../../img/Wave.png';

import Insta from "@iconscout/react-unicons/icons/uil-instagram";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className="footer">
            <div className="f-content">
                <div className="f-icons">
                    <a href="https://instagram.com/jigs_patel_0412?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <Insta color="white" size={"3rem"} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008561471284" target="_blank" rel="noreferrer">
                        <Facebook color="white" size={"3rem"} />
                    </a>
                    <a href="https://github.com/gaurang-tcs" target="_blank" rel="noreferrer">
                        <Gitub color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;