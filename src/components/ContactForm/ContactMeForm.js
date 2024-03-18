import React, {useEffect, useState} from 'react';
import {Button,  Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import {Alert} from "@mui/material";

import {IoMdSend} from "react-icons/io";

const ContactMeForm = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000); // Установите желаемую задержку в миллисекундах

        return () => {
            clearTimeout(timer);
        };
    }, [show]);

    const sendEmail = (e) =>
    {
        e.preventDefault()
        emailjs.sendForm('service_6ujmun8', 'template_1bzbjuo', e.target, 'WPoO-VPGvr7N-0Vvc' )
        setShow(true)

    }
    return (
        <>
        <Container className="contact-form p-2" id="contacts">
            <h2>Contact Me ------></h2>
            <div className="d-flex justify-content-center gap-5 align-items-start form-container mt-5">
                <Form className="d-flex flex-column" onSubmit={sendEmail} style={{width: "40%"}}>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label>Your email:</Form.Label>
                        <Form.Control type="email" name="email_form" className="fs-5" required/>

                        <Form.Label className="mt-3">Message:</Form.Label>
                        <Form.Control as="textarea" rows={5} name="message" className="fs-5" required/>
                    </Form.Group>

                    <div className="d-flex justify-content-end gap-3 form-button">
                        <Button variant="outline-light" style={{backgroundColor: "#E4FF18", color: "#000"}}
                                className="w-50 d-flex align-items-center justify-content-center gap-2" type="submit">Send <IoMdSend  size={20}/></Button>
                    </div>
                </Form>
            </div>

        </Container>

    {
        show &&
        <div className="position-fixed top-0 w-100 d-flex align-items-center justify-content-center">
            <Alert
                className="w-50"
                severity="success"
                action={
                    <Button color="inherit" size="small" className="text-bg-success border-0" onClick={() => setShow(false)}>
                        OK
                    </Button>
                }
            >
                Your message was sent successfully.
            </Alert>
        </div>

    }
</>
    );
};

export default ContactMeForm;