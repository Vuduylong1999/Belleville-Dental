import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaClock, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
            newErrors.email = 'Invalid email format';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundErrors = validate();
        if (Object.keys(foundErrors).length > 0) {
            setErrors(foundErrors);
            setSubmitted(false);
        } else {
            setErrors({});
            setSubmitted(true);
            // submit logic here
        }
    };

    return (
        <Container className="my-5 px-4">
            <Row className="mb-4">
                <Col className='text-center'>
                    <h1>Get in touch</h1>
                    <p className="text-muted">Book an Appointment to treat your teeth right now.</p>
                </Col>
            </Row>

            <Row>
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

                <Col md={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            {submitted && (
                                <Alert variant="success">Message submitted successfully!</Alert>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Write your message..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        isInvalid={!!errors.message}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.message}
                                    </Form.Control.Feedback>
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
