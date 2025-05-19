import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaClock, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const ContactUs = () => {
    const infoItems = [
        {
            icon: <FaClock size={20} />,
            title: "Office Timings",
            details: "Monday - Saturday (9:00am to 5pm)\nSunday (Closed)",
        },
        {
            icon: <FaEnvelope size={20} />,
            title: "Email Address",
            details: "Smile01@gmail.com",
        },
        {
            icon: <FaPhone size={20} />,
            title: "Phone Number",
            details: "0900-78601",
        },
        {
            icon: <FaComments size={20} />,
            title: "Live Chat",
            details: "+1-2064512559",
        },
    ];

    return (
        <Container className="my-5 px-4">
            {/* Title */}
            <Row className="mb-4">
                <Col className='text-center'>
                    <h1>Get in touch</h1>
                    <p className="text-muted">Book an Appointment to treat your teeth right now.</p>
                </Col>
            </Row>

            {/* Content */}
            <Row>
                {/* Left: Contact Info */}
                <Col md={6}>
                    {infoItems.map((item, idx) => (
                        <Card key={idx} className="mb-3 shadow-sm border-0">
                            <Card.Body className="d-flex align-items-start">
                                <div className="me-3 text-primary">
                                    {item.icon}
                                </div>
                                <div>
                                    <h6 className="mb-1">{item.title}</h6>
                                    <small className="text-muted" style={{ whiteSpace: 'pre-line' }}>{item.details}</small>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>

                {/* Right: Contact Form */}
                <Col md={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
