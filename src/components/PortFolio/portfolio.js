import React from "react";

import './portfolio.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="portfolio">
            <div className="portfolio-main">
                <div data-aos="fade-right" className="port-title">
                    <div className="port-inner">
                        <span className="text">
                            My Project
                        </span>
                        <span className="line">
                        </span>
                    </div>
                    <h2 className="sevices-name">
                        My Portfolio
                    </h2>
                </div>
                <div className="portfolio-body">
                    <div data-aos="fade-left" className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654575163/Animation_1_az6fym.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                Animation App
                            </div>
                            <div className="descrption">
                                In this animation, I set the example of animation <br />
                                by creating a dummy Domino's web app, I create different <br />
                                types of animation which is important to use in our applications.
                            </div>
                            <div className="project-demo-main">
                                <div className="project-demo">
                                    <a href="https://gaurang-tcs.github.io/animation-live/" target="_blank" rel="noreferrer">
                                        View Demo
                                    </a>
                                </div>
                                <div className="pro-demo">
                                    <a href="https://github.com/gaurang-tcs/Animation" target="_blank" rel="noreferrer">
                                        View Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                Crwn Clothing App
                            </div>
                            <div className="descrption">
                                A Crwn-Clothing app which is use for Online Shopping <br />
                                like Men-Women Clothes , Hats, Shoes And Also Jackets.
                            </div>
                            <div className="project-demo-main">
                                <div className="project-demo">
                                    <a href="https://crwn-cloth-web.herokuapp.com/" target="_blank" rel="noreferrer">
                                        View Demo
                                    </a>
                                </div>
                                <div className="pro-demo">
                                    <a href="https://github.com/gaurang-tcs/crwn-clothing" target="_blank" rel="noreferrer">
                                        View Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654577596/cloth_1_desjqy.png" alt="icon" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project2">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655114541/7_1_jiozd9.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                Datta Able
                            </div>
                            <div className="descrption">
                                Datta able is a sales website which are consist of <br />
                                daily,monthly,yearly sales.
                            </div>
                            <div className="project-demo-main">
                                <div className="project-demo">
                                    <a href="https://gaurang-tcs.github.io/dattaable-live/" target="_blank" rel="noreferrer">
                                        View Demo
                                    </a>
                                </div>
                                <div className="pro-demo">
                                    <a href="https://github.com/gaurang-tcs/datta-able" target="_blank" rel="noreferrer">
                                        View Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                Insta-Cart App
                            </div>
                            <div className="descrption">
                                Instacart is a personal shopping service available online <br />
                                and through Apple and Android devices. <br />
                            </div>
                            <div className="project-demo-main">
                                <div className="project-demo">
                                    <a href="https://gaurang-tcs.github.io/instacart-clone/" target="_blank" rel="noreferrer">
                                        View Demo
                                    </a>
                                </div>
                                <div className="pro-demo">
                                    <a href="https://github.com/gaurang-tcs/instaCart" target="_blank" rel="noreferrer">
                                        View Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655114535/8_1_w9oagm.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

