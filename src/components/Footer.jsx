import React from 'react';
import logo from "../assets/logo.png"; // logo uifry
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
    return (
        <footer className="container mt-5 px-4">
            {/* Top: Logo + Menu */}
            <div className="d-flex justify-content-between align-items-center py-3">
                {/* Logo */}
                <Link className="d-flex align-items-center" to="/">
                    <img src={logo} alt="uifry logo" height="30" className="me-2" />
                </Link>

                {/* Menu */}
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/products">Products</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/about-us">About</Link></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/contact-us">Contact</Link></li>
                </ul>
            </div>

            {/* Divider line */}
            <hr  style={{ borderTop: '3px solid black' }} />

            {/* Bottom: Copyright + Icons */}
            <div className="d-flex justify-content-between align-items-center py-2 flex-wrap">
                <small className="text-muted">
                    All rights reserved © bellevilledental.com | Terms and conditions apply!
                </small>
                <div className="d-flex gap-2 mt-2 mt-md-0">
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaFacebookF size={15} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaInstagram size={15} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaYoutube size={15} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaLinkedinIn size={15} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaTwitter size={15} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
