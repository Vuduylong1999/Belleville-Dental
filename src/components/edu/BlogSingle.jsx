"use client"

import { useState } from "react"
import {
  Search,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function BlogSingle() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      text: "The team at Dentia provided exceptional care. My dental implant procedure was painless and the results exceeded my expectations.",
      author: "Sarah Johnson",
      role: "Patient",
    },
    {
      text: "Professional, caring, and highly skilled. I've been coming here for years and wouldn't trust my dental care to anyone else.",
      author: "Michael Chen",
      role: "Patient",
    },
    {
      text: "Outstanding service and state-of-the-art facilities. The staff made me feel comfortable throughout my treatment.",
      author: "Emily Davis",
      role: "Patient",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-vh-100">

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">
          {/* Blog Content */}
          <div className="col-lg-8">
            <article className="mb-5">
              {/* Featured Image */}
              <div className="mb-4">
                <img src="/placeholder.svg?height=400&width=800" alt="Dental Care" className="img-fluid rounded" />
              </div>

              {/* Article Meta */}
              <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                <span className="d-flex align-items-center gap-1">
                  <Calendar size={16} />
                  March 15, 2024
                </span>
                <span className="d-flex align-items-center gap-1">
                  <User size={16} />
                  Dr. Sarah Wilson
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Tag size={16} />
                  Dental Care, Health
                </span>
              </div>

              {/* Article Title */}
              <h1 className="display-5 fw-bold mb-4">
                The Importance of Regular Dental Checkups for Optimal Oral Health
              </h1>

              {/* Article Content */}
              <div className="article-content">
                <p className="lead mb-4">
                  Regular dental checkups are essential for maintaining optimal oral health and preventing serious
                  dental problems. Many people underestimate the importance of routine dental visits, but they play a
                  crucial role in early detection and prevention of dental issues.
                </p>

                <p className="mb-4">
                  During a routine dental checkup, your dentist will thoroughly examine your teeth, gums, and mouth for
                  any signs of decay, gum disease, or other oral health problems. This comprehensive examination allows
                  for early detection of issues that might not be visible or cause pain in their early stages.
                </p>

                <h3 className="h4 fw-bold mb-3">Benefits of Regular Dental Visits</h3>

                <ul className="mb-4">
                  <li className="mb-2">Early detection of cavities and tooth decay</li>
                  <li className="mb-2">Prevention and treatment of gum disease</li>
                  <li className="mb-2">Professional teeth cleaning to remove plaque and tartar</li>
                  <li className="mb-2">Oral cancer screening</li>
                  <li className="mb-2">Assessment of existing dental work</li>
                </ul>

                <p className="mb-4">
                  Professional teeth cleaning is another crucial component of regular dental visits. Even with excellent
                  oral hygiene habits at home, plaque and tartar can build up in hard-to-reach areas. Professional
                  cleaning removes these deposits and helps prevent cavities and gum disease.
                </p>

                <blockquote className="blockquote border-start border-primary border-4 ps-4 my-4">
                  <p className="mb-0 fst-italic">
                    "Prevention is always better than cure. Regular dental checkups can save you from painful and
                    expensive dental procedures in the future."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Dr. Sarah Wilson, <cite title="Source Title">DDS, Oral Health Specialist</cite>
                  </footer>
                </blockquote>

                <h3 className="h4 fw-bold mb-3">How Often Should You Visit the Dentist?</h3>

                <p className="mb-4">
                  The American Dental Association recommends visiting your dentist at least twice a year for routine
                  checkups and cleanings. However, some individuals may need more frequent visits based on their oral
                  health status, risk factors, and specific dental needs.
                </p>

                <p className="mb-4">
                  Factors that may require more frequent dental visits include a history of gum disease, frequent
                  cavities, smoking, diabetes, or a weakened immune system. Your dentist will recommend the appropriate
                  frequency of visits based on your individual needs.
                </p>
              </div>

              {/* Social Share */}
              <div className="border-top pt-4 mt-5">
                <h5 className="mb-3">Share this article:</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <Facebook size={16} className="me-1" />
                    Facebook
                  </button>
                  <button className="btn btn-outline-info btn-sm">
                    <Twitter size={16} className="me-1" />
                    Twitter
                  </button>
                  <button className="btn btn-outline-primary btn-sm">
                    <Linkedin size={16} className="me-1" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="card mb-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Dr. Sarah Wilson"
                      className="rounded-circle"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <h5 className="card-title mb-1">Dr. Sarah Wilson</h5>
                    <p className="text-muted small mb-2">DDS, Oral Health Specialist</p>
                    <p className="card-text small mb-0">
                      Dr. Wilson has over 15 years of experience in general dentistry and preventive care. She is
                      passionate about educating patients on the importance of oral health and providing compassionate,
                      high-quality dental care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mb-5">
              <h4 className="fw-bold mb-4">Related Articles</h4>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <img src="/placeholder.svg?height=200&width=300" className="card-img-top" alt="Dental hygiene" />
                    <div className="card-body">
                      <h6 className="card-title">
                        <a href="#" className="text-decoration-none">
                          5 Essential Tips for Better Oral Hygiene
                        </a>
                      </h6>
                      <p className="card-text small text-muted">
                        Learn the fundamental practices that can significantly improve your oral health...
                      </p>
                      <small className="text-muted">March 10, 2024</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <img src="/placeholder.svg?height=200&width=300" className="card-img-top" alt="Teeth whitening" />
                    <div className="card-body">
                      <h6 className="card-title">
                        <a href="#" className="text-decoration-none">
                          Professional vs. At-Home Teeth Whitening
                        </a>
                      </h6>
                      <p className="card-text small text-muted">
                        Discover the differences between professional and at-home whitening options...
                      </p>
                      <small className="text-muted">March 8, 2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Search */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Search</h5>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search articles..." />
                  <button className="btn btn-primary" type="button">
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Recent Posts</h5>
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action border-0 px-0">
                    <div className="d-flex">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Post thumbnail"
                        className="rounded me-3"
                        width="60"
                        height="60"
                      />
                      <div>
                        <h6 className="mb-1 small">Understanding Dental Implants</h6>
                        <small className="text-muted">March 12, 2024</small>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action border-0 px-0">
                    <div className="d-flex">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Post thumbnail"
                        className="rounded me-3"
                        width="60"
                        height="60"
                      />
                      <div>
                        <h6 className="mb-1 small">Preventing Gum Disease</h6>
                        <small className="text-muted">March 9, 2024</small>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action border-0 px-0">
                    <div className="d-flex">
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt="Post thumbnail"
                        className="rounded me-3"
                        width="60"
                        height="60"
                      />
                      <div>
                        <h6 className="mb-1 small">Children's Dental Care</h6>
                        <small className="text-muted">March 5, 2024</small>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Categories</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none">
                      General Dentistry <span className="badge bg-light text-dark ms-2">12</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none">
                      Preventive Care <span className="badge bg-light text-dark ms-2">8</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none">
                      Cosmetic Dentistry <span className="badge bg-light text-dark ms-2">6</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none">
                      Oral Surgery <span className="badge bg-light text-dark ms-2">4</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none">
                      Pediatric Dentistry <span className="badge bg-light text-dark ms-2">5</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Newsletter</h5>
                <p className="card-text small">
                  Subscribe to our newsletter for the latest dental health tips and updates.
                </p>
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your email address" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Testimonials */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Patient Testimonials</h5>
                <div className="position-relative">
                  <div className="testimonial-content">
                    <blockquote className="blockquote">
                      <p className="mb-3 small">"{testimonials[currentSlide].text}"</p>
                      <footer className="blockquote-footer">
                        <strong>{testimonials[currentSlide].author}</strong>
                        <br />
                        <small>{testimonials[currentSlide].role}</small>
                      </footer>
                    </blockquote>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-outline-secondary btn-sm" onClick={prevSlide}>
                      <ChevronLeft size={16} />
                    </button>
                    <div className="d-flex gap-1">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`btn btn-sm ${index === currentSlide ? "btn-primary" : "btn-outline-secondary"}`}
                          style={{ width: "8px", height: "8px", padding: 0, borderRadius: "50%" }}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                    <button className="btn btn-outline-secondary btn-sm" onClick={nextSlide}>
                      <ChevronRight size={16} />
                    </button>                  
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
