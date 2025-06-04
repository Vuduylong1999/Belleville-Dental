import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';
import VisitorCounter from './VisitorCounter';

const Header = () => {
    const location = useLocation();    
    const isActive = (path) => {
        if (path === '/home' && location.pathname === '/') return true;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="navbar px-4 py-2">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/home">
                    <img src={logo} alt="uifry logo" height="30" className="me-2" />
                </Link>

                {/* Menu */}
                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/home') ? 'active' : ''}`} to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/products') ? 'active' : ''}`} to="/products">Products</Link>
                    </li>
                    <li className="nav-item dropdown position-relative">
                        <a
                            className={`nav-link dropdown-toggle ${isActive('/education') ? 'active' : ''}`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Education
                        </a>
                        <ul className="dropdown-menu position-absolute">
                            <li>
                                <Link className={`dropdown-item ${isActive('/education/professional') ? 'active' : ''}`} to="/education/professional">Professional</Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item ${isActive('/education/patient') ? 'active' : ''}`} to="/education/patient">Patient</Link>
                            </li>
                            <li>
                                <Link className={`dropdown-item ${isActive('/education/researchs') ? 'active' : ''}`} to="/education/researchs">Researchs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/about-us') ? 'active' : ''}`} to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`} to="/contact-us">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} to="/gallery">Gallery</Link>
                    </li>
                </ul>

                {/* Visitor Counter Component */}
                <VisitorCounter />
            </div>
        </nav>
    );
};

export default Header;


// This code defines a functional component called Header that renders a navigation bar using Bootstrap classes.
// The navigation bar includes a brand logo, links to different sections of the website (Home, Services, Blogs, About, Contact), and a button to "Book Now".

// Dòng code tạo lập 1 functional component Header sử dụng React với Bootstrap.
// Component này bao gồm một thanh điều hướng với logo thương hiệu, các liên kết đến các phần khác nhau của trang web (Trang chủ, Dịch vụ, Blog, Giới thiệu, Liên hệ) và một nút "Đặt ngay".

// Em làm giống mẫu nhé, chưa chỉnh links các trang phụ. Do chủ yếu là FE nên chưa chỉnh backend