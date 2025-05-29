import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import { specialists } from '../data/products';
import { clients } from '../data/products';
import { allArticles } from '../data/products';
import Image from '../assets/image.png';
import ImageMain from '../assets/imgmain.png';
import Teeth from '../assets/teeth.png';
import Smile from '../assets/smile.png';
import Implant from '../assets/implant.png';
import Group from '../assets/group.png';
import DentistImage from '../assets/dentistimage.jpg';
import SmileImage from '../assets/smileimage.png';
import VideoThumb from '../assets/video-thumb.png';
import Phone from '../assets/phone.jpg';
import Linkedin from '../assets/in.png';
import Teeth1 from '../assets/teeth1.png';
import Phone1 from '../assets/phone1.jpg';
import Linkedin1 from '../assets/in1.png';


const DentalHomePage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const visibleSpecialists = specialists.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < specialists.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const shownArticles = allArticles;

  return (
    <div className="font-sans text-gray">
       <section className="py-5 bg-primary bg-opacity-10">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold text-primary mb-3">
                Get Ready For Your Best Ever{" "}
                <span className="text-info">Dental Experience!</span>
              </h1>
              <p className="text-secondary mb-4">
                We use only the best quality materials on the market in order to
                provide the best products to our patients. So don’t worry about
                anything and book yourself.
              </p>
              <div className="d-flex align-items-center mb-4">
                <a href="#" className="btn btn-primary me-3">
                  Book an appointment
                </a>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-flex justify-content-center align-items-center bg-light rounded-3"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <img
                      src={Phone}
                      alt="Phone Icon"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </div>
                  <div className="text-info small">
                    <strong>Dental 24H Emergency</strong>
                    <br />
                    0900-78601
                  </div>
                </div>

              </div>
              <div
                className="border border-primary rounded p-3"
                style={{
                  maxWidth: '500px',
                  position: 'relative',
                  backgroundColor: '#e9f4ff',
                  boxShadow: '0 4px 12px rgba(0, 123, 255, 0.15)',
                }}
              >

                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={Image}
                      alt="User"
                      className="rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">Thomas daniel</h6>
                      <small className="text-muted">Sr Dental</small>
                    </div>
                  </div>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      style={{ width: '24px', height: '24px' }}
                    />
                  </a>
                </div>
                <p className="mt-3 mb-0 small text-dark">
                  Top Quality dental treatment done by field experts,<br />
                  Highly Recommended for everyone
                </p>
              </div>
            </div>

            
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="position-relative text-center my-5" style={{ width: '400px', height: '400px' }}>
                <div className="circle-border position-absolute top-0 start-0 w-100 h-100"></div>

                <img
                  src={ImageMain}
                  alt="Dentist"
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ maxWidth: '700px', zIndex: 2 }}
                />
                <div className="tooth-icon-wrapper tooth-1">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-2">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-3">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-4">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-5">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-6">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
                <div className="tooth-icon-wrapper tooth-7">
                  <img src={Teeth1} alt="tooth" className="tooth-icon-img" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-5" style={{ backgroundColor: '#e9f4ff' }}>
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Root Canal Treatment",
                desc: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
                icon: Teeth, 
              },
              {
                title: "Cosmetic Dentist",
                desc: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
                icon: Smile,
              },
              {
                title: "Dental Implants",
                desc: "A dental implant is an artificial tooth that’s placed into your jaw to hold a prosthetic tooth or bridge.",
                icon: Implant,
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="bg-white p-4 rounded shadow-sm h-100 text-center">
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#0dcaf0',
                      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
                    }}
                  >
                    <img src={item.icon} alt={item.title} style={{ width: '30px', height: '30px' }} />
                  </div>

                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                  <a href="#" className="text-info fw-semibold text-decoration-none">
                    Learn More <i className="bi bi-arrow-right-circle"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', lineHeight: '1.4' }}>
                We’re <span className="text-primary fw-bold">Welcoming</span> New <br />
                Patients And Can’t Wait <br />
                To Meet You.
              </h1>

              <p className="text-muted mb-4" style={{ maxWidth: '90%' }}>
                We use only the best quality materials on the market in order to provide the best products to our patients. So don’t worry about anything and book yourself.
              </p>

              <form className="d-flex align-items-center border rounded overflow-hidden" style={{ maxWidth: '400px' }}>
                <span className="px-3 text-muted">
                  <i className="bi bi-telephone"></i>
                </span>
                <input
                  type="text"
                  src={Phone1}
                  alt="phone1"
                  className="form-control border-0"
                  placeholder="Enter your Phone Number"
                />
                <button className="btn btn-primary px-4" type="submit">Submit</button>
              </form>
            </div>

            <div className="col-lg-6 position-relative d-flex justify-content-center">
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-4  bg-opacity-10"
                style={{ zIndex: 0, transform: 'translate(40px, 40px)' }}
              ></div>
              <img
                src={Group}
                alt="Patient"
                className="img-fluid rounded-4 position-relative"
                style={{ zIndex: 1, maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>


      <section className="py-5" style={{ backgroundColor: '#e9f4ff' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center">
              <img
                src={DentistImage}
                alt="Dentist"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ fontSize: '2rem', lineHeight: '1.4' }}>
                Why Choose <span className="text-primary fw-bold">Smile</span> For All<br />
                Your Dental Treatments?
              </h2>

              <p className="text-muted mb-4" style={{ maxWidth: '90%' }}>
                We use only the best quality materials on the market in order to provide the best products to our patients.
              </p>

              <ul className="list-unstyled mb-4">
                {[
                  "Top quality dental team",
                  "State of the art dental services",
                  "Discount on all dental treatment",
                  "Enrollment is quick and easy",
                ].map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-center">
                    <i className="bi bi-shield-check text-primary me-2"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="btn btn-primary rounded px-4 py-2 fw-semibold">
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">
                Leave Your Worries At The Door And Enjoy A Healthier,
                <br />
                More <span className="text-primary">Precise Smile</span>
              </h2>
              <p className="text-muted mb-3">
                We use only the best quality materials on the market in order to provide the best products to our patients. So don’t worry about anything and book yourself.
              </p>
              <a href="#" className="btn btn-primary">
                Book an appointment
              </a>
            </div>
            
            <div className="col-md-6 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src={SmileImage}
                  alt="Smile"
                  className="img-fluid rounded-3"
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-3"
                  style={{ zIndex: -1, transform: "translate(10px, 10px)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column align-items-center text-center bg-white">
        <div className="mb-4" style={{ maxWidth: "640px" }}>
          <h2 className="fw-bold text-primary mb-3 fs-2">
            We’re Welcoming New Patients <br />
            And Can’t Wait To Meet You.
          </h2>
          <p className="text-muted fs-6">
            We use only the best quality materials on the market in <br />
            order to provide the best products to our patients.
          </p>
        </div>

        <div
          className="position-relative mb-4 overflow-hidden rounded"
          style={{
            width: "100%",
            maxWidth: "1064px",
            height: "452px",
          }}
        >
          <img
            src={VideoThumb}
            alt="Happy Patients"
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <button className="btn btn-primary px-4 py-2 mb-4">Watch Playlist</button>
      </section>

      <section className="py-5 text-center mt-4" style={{ backgroundColor: '#e9f4ff' }}>
        <div className="container">
          <h2 className="fw-bold text-primary mb-3">Meet Our Specialists</h2>
          <p className="text-muted mb-5">
            We use only the best quality materials on the market in <br />
            order to provide the best products to our patients.
          </p>

          <div className="row justify-content-center mb-4">
            {visibleSpecialists.map((doc, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card border-0 shadow-sm rounded overflow-hidden position-relative">
                  <img
                    src={doc.img}
                    className="card-img-top"
                    alt={doc.name}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 end-0 m-2">
                    <img src={Linkedin1} alt="LinkedIn" width={30} />
                  </span>
                  <div className="card-body bg-gradient bg-opacity-75 bg-dark text-white p-2">
                    <h5 className="card-title mb-1">{doc.name}</h5>
                    <p className="card-text small">{doc.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-light border rounded-circle"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              ←
            </button>
            <button
              className="btn btn-light border rounded-circle"
              onClick={handleNext}
              disabled={startIndex + visibleCount >= specialists.length}
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white text-center">
        <h2 className="fw-bold mb-3">
          <span className="text-primary">Our Happy Clients</span>
        </h2>
        <p className="text-muted mb-4 px-3">
          We use only the best quality materials on the market in order to provide the best products to our patients.
        </p>

        <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(clients.length / 3) }, (_, groupIdx) => {
              const group = clients.slice(groupIdx * 3, groupIdx * 3 + 3);
              return (
                <div className={`carousel-item ${groupIdx === 0 ? 'active' : ''}`} key={groupIdx}>
                  <div className="container">
                    <div className="row justify-content-center g-4">
                      {group.map((client, idx) => (
                        <div className="col-md-4" key={idx}>
                          <div className="card shadow-sm h-100">
                            <div className="card-body text-start">
                              <div className="d-flex align-items-center mb-3">
                                <img src={client.image} className="rounded-circle me-3" width="60" height="60" alt={client.name} />
                                <div>
                                  <h5 className="card-title mb-0 fw-bold fs-4">{client.name}</h5>
                                  <div className="text-warning fs-5">
                                    {'★'.repeat(client.rating)}{'☆'.repeat(5 - client.rating)}
                                  </div>
                                </div>
                              </div>
                              <p className="card-text text-muted fs-5">{client.review}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#clientCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#clientCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">News & Articles</h2>
            <p className="text-muted">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>

        <div className="row g-4">
          {shownArticles.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="h-100 rounded-4 shadow-sm p-3" style={{ backgroundColor: "#e6f4ff" }}>
                <img src={item.img} className="img-fluid rounded-3 mb-3" alt={item.title} />
                <span className="badge bg-dark mb-2">{item.category}</span>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="text-muted small mb-2">{item.desc}</p>
                <small className="text-muted d-block text-end">~ {item.author}</small>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Check out more</button>
        </div>
      </div>
  </div>
  );
};

export default DentalHomePage;
