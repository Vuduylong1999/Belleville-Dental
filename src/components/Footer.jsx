import React from 'react';
import logo from "../assets/logo.png"; // logo uifry
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
    return (
        <footer className="container mt-5 px-4">
            {/* Top: Logo + Menu */}
            <div className="d-flex justify-content-between align-items-center py-3">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    <img src={logo} alt="uifry logo" height="30" className="me-2" />
                </div>

                {/* Menu */}
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link text-dark" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-dark" href="#">Service</a></li>
                    <li className="nav-item"><a className="nav-link text-dark" href="#">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link text-dark" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link text-dark" href="#">Contact</a></li>
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
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaFacebookF size={14} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaInstagram size={14} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaYoutube size={14} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaLinkedinIn size={14} /></a>
                    <a href="#" className="btn btn-dark btn-sm rounded-circle"><FaTwitter size={14} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
