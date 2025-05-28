import React from 'react';
import Image from '../assets/image.png';
import ImageMain from '../assets/imgmain.png';
import Teeth from '../assets/teeth.png';
import Smile from '../assets/smile.png';
import Implant from '../assets/implant.png';
import Group from '../assets/group.png';
import DentistImage from '../assets/dentistimage.jpg';
import SmileImage from '../assets/smileimage.png';
import VideoThumb from '../assets/video-thumb.png';
import Linkedin from '../assets/linkedin.png';

const DentalHomePage = () => {
  return (
    <div className="font-sans text-gray ">
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
                <div className="text-info small">
                  <strong>Dental 24H Emergency</strong>
                  <br />
                  0900-78601
                </div>
              </div>
              <div className="d-flex align-items-center p-2 bg-white shadow rounded">
                <img
                  src={Image}
                  alt="Dentist"
                  className="rounded-circle me-2"
                  width="50"
                  height="50"
                />
                <div>
                  <div className="fw-semibold">Thomas Daniel</div>
                  <div className="text-muted small">
                    Top Quality dental treatment done by field experts.
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-lg-6 text-center">
              <img
                src={ImageMain}
                alt="Dentist"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
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
                <div className="bg-light p-4 rounded shadow-sm h-100">
                  <div className="mb-3 text-primary fs-1">
                    <i className={item.icon}></i>
                  </div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                  <a href="#" className="text-info fw-semibold text-decoration-none">
                    Learn More
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
              <h2 className="fw-bold mb-3">
                We’re <span className="text-primary">Welcoming</span> New Patients<br />
                And Can’t Wait To Meet You.
              </h2>
              <p className="text-muted mb-4">
                We use only the best quality materials on the market in order to provide the best products to our patients. So don’t worry about anything and book yourself.
              </p>

              <form className="d-flex" style={{ maxWidth: '400px' }}>
                <input type="text" className="form-control rounded-start" placeholder="Enter your Phone Number" />
                <button className="btn btn-primary rounded-end" type="submit">Submit</button>
              </form>
            </div>

            <div className="col-lg-6 position-relative">
              <div className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-3" style={{ zIndex: 0, transform: 'translate(15px, 15px)' }}></div>
              <img src={Group} alt="Patient" className="img-fluid rounded-3 position-relative" style={{ zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={DentistImage} alt="Dentist" className="img-fluid rounded-3" />
            </div>

            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">
                Why Choose <span className="text-primary">Smile</span> For All<br />Your Dental Treatments?
              </h3>
              <p className="text-muted mb-4">
                We use only the best quality materials on the market in order to provide the best products to our patients.
              </p>
              <ul className="list-unstyled mb-4">
                {[
                  "Top quality dental team",
                  "State of the art dental services",
                  "Discount on all dental treatment",
                  "Enrollment is quick and easy"
                ].map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">Book an appointment</a>
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

      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-blue-50">
        <div className="max-w-xl mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            We’re Welcoming New Patients And Can’t Wait To Meet You.
          </h2>
          <p className="text-gray-700 mb-4">
            We use only the best quality materials on the market in order to provide the best products to our patients.
          </p>
         
        </div>
        <img
          src={VideoThumb}
          alt="Happy Patients"
          className="rounded-lg"
        />
        <form className="justify-content-center" >
            <button className="btn btn-primary rounded-end " type="submit">Watch Playlist</button>
        </form>
       
      </section>

    </div>
  );
};

export default DentalHomePage;
