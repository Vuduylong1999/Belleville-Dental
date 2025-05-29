import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/PageBanner.css";

export default function PageBanner({ bgImage, subtitle, title }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Helper function to capitalize first letter of each word
  const capitalize = (str) => {
    return str
      .split("-")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  return (
    <div
      className="page-banner position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "200px",
      }}
    >
      <div className="overlay position-absolute w-100 h-100" />
      <div className="container position-relative text-white py-5">
        <div className="fs-5">{subtitle}</div>
        <div className="fw-bold display-5">{title}</div>
        <div className="mt-2">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = capitalize(name);

            return (
              <span key={name}>
                <span className="mx-2">&gt;</span>
                {isLast ? (
                  <span className="text-white-50">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-white text-decoration-none">
                    {displayName}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
