import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Badge} from "react-bootstrap";

const ProjectCard = ({project}) => {

    const bgColors = ['primary',  'danger', 'secondary', 'warning']
    return (
        <Card style={{ width: '25rem', border: "2px solid #fff", borderRadius: "20px"}} bg={"dark"} className="project-card">
            <Card.Img variant="top" src={project.image} style={{borderRadius: "20px"}} className="h-50" />
            <Card.Body className="fs-5 d-flex flex-column justify-content-between" >
                <Card.Title className="fs-4">{project.name} </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text style={{color: "#ccc"}} className="d-flex gap-1">

                    {
                        project.technologies.map((item,index) =>
                            <Badge bg={bgColors[index]}>{item}</Badge>
                        )
                    }

                </Card.Text>


                <div className="d-flex gap-3 justify-content-end">
                    <Button variant="outline-light"  href={project.githubUrl} >Github</Button>
                    {
                        project.name !== 'Asianhouse' &&   <Button variant="outline-light" style={{backgroundColor: "#E4FF18", padding: "5px 30px", color: "#000"}} href={project.urlPage}>Open</Button>
                    }

                </div>

            </Card.Body>
        </Card>
    );
};

export default ProjectCard;