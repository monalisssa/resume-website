import React from 'react';
import {Button, Card, Carousel, Container} from "react-bootstrap";
import weather_app_image from "../../static/slider_images/weather-app.png";
import asianhouse_image from "../../static/slider_images/asianhouse_project.png";
import music_app_image from "../../static/slider_images/music_app.png";
import converter_image from "../../static/slider_images/converter_image.png"
import stickers_app_image from "../../static/slider_images/stickers_app.png"
const MainContainer = () => {
    return (
        <Container className="d-flex mt-5 justify-content-between w-100" id="main">
            <div className="w-100">
                <Card style={{width: "20rem"}} variant="primary" className="pt-5">
                    <Card.Header>Hi! I'm a frontend-developer.</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            This is my resume-site. There is information about me, my projects and skills. You can contact me by email from here :>
                        </Card.Text>
                        <Button variant="outline-light" href="#contacts">Contact me!</Button>
                    </Card.Body>
                </Card>
            </div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={weather_app_image} width="800" height="400"/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={asianhouse_image} width="800" height="400" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={music_app_image} width="800" height="400"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={converter_image} width="800" height="400"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={stickers_app_image} width="800" height="400"/>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default MainContainer;