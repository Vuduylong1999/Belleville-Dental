import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-5 px-4">
            {/* Top: Logo + Menu */}
            <div className="d-flex justify-content-between align-items-center py-3">
                {/* Logo */}
                <Link className="d-flex align-items-center" to="/">
                    <img src={logo} alt="uifry logo" height="30" className="me-2" />
                </Link>

                {/* Menu */}
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link text-dark footer-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark footer-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item dropup">
                        <a
                            className="nav-link dropdown-toggle text-dark footer-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            Education
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item footer-dropdown-item" to="/education/professional">Professional</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item footer-dropdown-item" to="/education/patient">Patient</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item footer-dropdown-item" to="/education/researchs">Researchs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark footer-link" to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark footer-link" to="/contact-us">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark footer-link" to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </div>

            {/* Divider line */}
            <hr style={{ borderTop: '3px solid black' }} />

            {/* Bottom: Copyright + Icons */}
            <div className="d-flex justify-content-between align-items-center py-2 flex-wrap">
                <small className="text-muted">
                    All rights reserved © bellevilledental.com | Terms and conditions apply!
                </small>
                <div className="d-flex gap-2 mt-2 mt-md-0">
                    <a href="#" className="btn btn-dark btn-sm rounded-circle social-icon">
                        <FaFacebookF size={15} />
                    </a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle social-icon">
                        <FaInstagram size={15} />
                    </a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle social-icon">
                        <FaYoutube size={15} />
                    </a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle social-icon">
                        <FaLinkedinIn size={15} />
                    </a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle social-icon">
                        <FaTwitter size={15} />
                    </a>
                </div>
            </div>

            <style jsx="true">{`
                .footer-link {
                    position: relative;
                    transition: color 0.3s ease;
                }

                .footer-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #0d6efd;
                    transition: width 0.3s ease;
                }

                .footer-link:hover {
                    color: #0d6efd !important;
                }

                .footer-link:hover::after {
                    width: 100%;
                }

                .footer-dropdown-item {
                    transition: all 0.3s ease;
                }

                .footer-dropdown-item:hover {
                    background-color: #f8f9fa;
                    color: #0d6efd;
                    padding-left: 1.5rem;
                }

                .social-icon {
                    transition: all 0.3s ease;
                }

                .social-icon:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
