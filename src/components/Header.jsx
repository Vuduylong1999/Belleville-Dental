import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar sticky-top px-4 py-2 rounded p-1 " style={{ backgroundColor: '#eaf6ff' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">

                {/* Logo bên trái */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="uifry logo" height="30" className="me-2" />
                </Link>

                {/* Menu giữa */}
                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact</Link>
                    </li>
                </ul>

                {/* Avatar + Book Now */}
                <div className="d-flex align-items-center">
                    <img src={avatar} alt="avatar" className="rounded-circle me-2" width="35" height="35" />
                    <button className="btn btn-primary">Book Now</button>
                </div>
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