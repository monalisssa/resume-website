import React from 'react';
import {Container} from "react-bootstrap";


const SkillsContainer = () => {
    return (
        <Container className="skills" id="skills">
           <h2 className="mt-5">My Skills ------></h2>

            <div className="d-flex mt-5 justify-content-center gap-5">
                <div className="skills-list w-25">
                    <span>Technologies Stack</span>
                    <ul>Frontend:
                        <li>HTML5, CSS</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>MobX</li>
                        <li>Bootstrap, Tailwind</li>
                        <li>SCSS/SASS</li>
                        <li>REST API</li>
                        <li>Axios</li>
                    </ul>
                    <ul>Backend:
                        <li>Node.js</li>
                        <li>Java (Spring MVC, Spring Boot)</li>
                        <li>PostgreSQL, MySql, MongoDb</li>

                    </ul>
                </div>

                <div className="skills-list">
                    <span>Development Tools</span>
                    <ul>For Frontend:
                        <li>Webstorm</li>
                        <li>Visual Studio Code</li>
                        <li>Figma</li>
                        <li>Photoshop</li>
                    </ul>
                    <ul>For Backend:
                        <li>InteliJ IDEA</li>
                    </ul>
                    <ul className="mb-2">Version Control:
                        <li>Git (Github)</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <span>English</span>
                    <ul>Level:
                        <li>B1</li>
                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default SkillsContainer;