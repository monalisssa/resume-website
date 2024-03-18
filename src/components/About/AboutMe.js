import React from 'react';
import {Container} from "react-bootstrap";
import about_me from "../../static/about_img.png"
const AboutMe = () => {
    return (
        <Container className="about-me d-flex justify-content-center align-items-center" id="about-me">
            <div className="w-100">
                <h2 className="mt-5">About Me ------></h2>
                <p className="mt-5">
                    My name is Elizaveta. I am a 3rd year student at BSUIR majoring in Information Systems and Networks
                    in
                    Economics.
                </p>
                <p >One of the reasons I chose the frontend development is the opportunity to see the
                    results of my work
                    directly. Immediately after writing the code, I can see it come to life on the screen, which gives
                    me a
                    sense of achievement.
                </p>
                <p >I like to learn new things and I am ready to devote a lot of time to study.</p>
            </div>

            <img src={about_me} className="w-50" alt="about"/>
        </Container>

    );
};

export default AboutMe;