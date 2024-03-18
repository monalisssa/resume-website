import React from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import projects from "../../consts";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
    return (
        <Container className="menu-projects" id="projects">
            <h2 className="mt-5">My Projects ------></h2>
            <Tabs
                defaultActiveKey="ReactJS"
                id="justify-tab-example"
                className="p-5 pb-2 menu-projects"
                justify
            >
                <Tab eventKey="ReactJS" title="ReactJS">
                    <Row className="d-flex flex-column gap-5">
                        <Col className="d-flex gap-5 justify-content-center projects-row">
                            {projects["ReactJS"].map(project =>
                                <ProjectCard  project={project}/>
                            )}
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="js" title="JavaScript">
                    <Row className="d-flex flex-column gap-5">
                        <Col className="d-flex gap-5 justify-content-center projects-row">
                            {projects["JavaScript"].map(project =>
                                <ProjectCard  project={project}/>
                            )}
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="ts" title="Typescript">
                    <p className="text-center w-100">
                        There are no projects yet. But it will definitely appear in the future.
                    </p>
                </Tab>
                <Tab eventKey="angular" title="Angular">
                    <p className="text-center w-100">
                        There are no projects yet. But it will definitely appear in the future.
                    </p>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default ProjectsContainer;