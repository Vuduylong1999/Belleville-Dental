import React from 'react';
import lastest from "../assets/lastest-technology.jpg";
import doctor from "../assets/doctor.jpg";
import bren from "../assets/bren.png";
import ashish from "../assets/ashish.png";
import james from "../assets/james.png";
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container className="mt-5 px-4 pd-5">
            <Row className="mb-4">
                <Col className='text-center'>
                    <h1>About Us</h1>
                    <p className="text-muted">Learn more about our mission, vision, and technology.</p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={12} className="mt-4">
                    <Row>

                        {/* Ảnh bên phải */}
                        <Col md={5}
                            className="d-flex justify-content-center align-items-center"
                            style={{ border: 'none' }}>
                            <img
                                src={doctor}
                                alt="Dental Technology"
                                className="img-fluid rounded"
                                style={{ maxHeight: '500px' }}
                            />
                        </Col>
                        <Col md={7}>
                            <h2><b>Our Mission</b></h2>
                            <p>
                                At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.
                            </p>
                            <h5>More than anything else we love creating happy, healthy smiles.</h5>
                            <p>
                                We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.
                            </p>
                        </Col>
                    </Row>
                </Col>


                <Col md={12} className="mt-4 py-5">
                    <h2 className="text-center">Meet our specialists</h2>
                    <p className="text-center">
                        We use only the best quality materials on the market in order to provide the best products to our patients.
                    </p>
                    <Col>
                        <Row className="mt-4">
                            <Col md={6}
                                className="d-flex justify-content-center align-items-center"
                                style={{ border: 'none' }}>
                                <img
                                    src={bren}
                                    alt="Dental Technology"
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: '300px'
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <h3>Dr. Brent</h3>
                                <p>
                                    ( Specility in General & Cosmetic Service )
                                    <br /><br />
                                    Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="mt-4 py-3">
                            <Col md={6}
                                className="d-flex justify-content-center align-items-center"
                                style={{ border: 'none' }}>
                                <img
                                    src={ashish}
                                    alt="Dental Technology"
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: '300px'
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <h3>Dr. Ashish J. Vashi</h3>
                                <p>
                                    ( Specility in implant dentistry )
                                    <br /><br />
                                    Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="mt-4">
                            <Col md={6}
                                className="d-flex justify-content-center align-items-center"
                                style={{ border: 'none' }}>
                                <img
                                    src={james}
                                    alt="Dental Technology"
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: '300px'
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <h3>Dr. James Connors</h3>
                                <p>
                                    ( Specility in Oral Surgeon )
                                    <br /><br />
                                    When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                <Col md={12} className="mt-4 py-5">
                    <h2 className="text-center">Latest Technology</h2>
                    <p className="text-center">
                        Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency.
                    </p>

                    <Row className="mt-4">
                        {/* Text bên trái */}
                        <Col md={6}>
                            <h3>The Future of Dentistry is Digital:</h3>
                            <p>
                                Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients.
                                <br /><br />
                                In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace.
                                <br /><br />
                                Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth.
                            </p>
                        </Col>

                        {/* Ảnh bên phải */}
                        <Col md={6}
                            className="d-flex justify-content-center align-items-center"
                            style={{ border: 'none' }}>
                            <img
                                src={lastest}
                                alt="Dental Technology"
                                className="img-fluid rounded"
                                style={{ maxHeight: '400px' }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    <h4>We’re welcoming new patients and can’t wait to meet you.</h4>
                    <p>
                        We use only the best quality materials on the market in order to provide the best products to our patients.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
