import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./BlogSingle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendar,
  faUser,
  faTag,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { blogPosts, categories, relatedPosts, tags } from "../../data/blogData";
import { Articles as ProfessionalArticles } from "../../data/education";
import { ResearchArticles } from "../../data/researchs";

export default function BlogSingle() {
  const { id } = useParams();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Determine content type based on route
  const getContentType = () => {
    if (location.pathname.includes('/education/researchs')) return 'research';
    if (location.pathname.includes('/education/professional')) return 'professional';
    return 'patient';
  };

  const contentType = getContentType();

  // Get the appropriate dataset
  const getDataset = () => {
    switch (contentType) {
      case 'research':
        return ResearchArticles || [];
      case 'professional':
        return ProfessionalArticles || [];
      default:
        return blogPosts;
    }
  };

  const allPosts = getDataset();
  const currentId = parseInt(id);
  const blogPost = allPosts.find(post => post.id == currentId || post.id == currentId.toString());

  if (!blogPost) {
    return (
      <div className="container my-5 text-center">
        <h2>Article not found</h2>
        <p className="text-muted">The article you're looking for doesn't exist.</p>
        <Link to={location.pathname.split('/').slice(0, -1).join('/')} className="btn btn-primary mt-3">
          Back to Articles
        </Link>
      </div>
    );
  }

  // Get related posts excluding current post, with type-specific filtering
  const otherPosts = allPosts
    .filter(post => post.id !== blogPost.id)
    .filter(post => {
      if (contentType === 'research' && post.field) return true;
      if (contentType === 'professional' && post.tags?.includes('Professional')) return true;
      if (contentType === 'patient' && !post.field && !post.tags?.includes('Professional')) return true;
      return contentType === 'patient'; // default to showing in patient view
    })
    .slice(0, 2);

  const renderContent = () => {
    if (blogPost.content) {
      // For blog posts with full content structure
      return (
        <>
          <p className="lead mb-4">{blogPost.content.summary}</p>
          <p className="mb-4">{blogPost.content.mainContent}</p>
          {blogPost.content.sections?.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="h4 fw-bold mb-3">{section.title}</h3>
              {section.bulletPoints && (
                <ul className="mb-4">
                  {section.bulletPoints.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              )}
              {Array.isArray(section.content) ? (
                section.content.map((paragraph, i) => (
                  <p key={i} className="mb-3">{paragraph}</p>
                ))
              ) : (
                <p className="mb-3">{section.content}</p>
              )}
            </div>
          ))}
          {blogPost.content.quote && (
            <blockquote className="blockquote border-start border-primary border-4 ps-4 my-4">
              <p className="mb-0 fst-italic">"{blogPost.content.quote.text}"</p>
              <footer className="blockquote-footer mt-2">
                {blogPost.content.quote.author}, <cite>{blogPost.content.quote.role}</cite>
              </footer>
            </blockquote>
          )}
        </>
      );
    }

    // For research and professional articles with simpler content
    return (
      <>
        {blogPost.description && <p className="lead mb-4">{blogPost.description}</p>}
        {blogPost.desc && <p className="lead mb-4">{blogPost.desc}</p>}
        
        {contentType === 'research' && (
          <>
            {blogPost.field && (
              <div className="mb-4">
                <h3 className="h4 fw-bold mb-3">Field of Research</h3>
                <p>{blogPost.field}</p>
              </div>
            )}
            {blogPost.mediaType && (
              <div className="mb-4">
                <h3 className="h4 fw-bold mb-3">Media Type</h3>
                <div className="alert alert-info">
                  <strong>Available as:</strong> {blogPost.mediaType}
                </div>
              </div>
            )}
          </>
        )}

        {contentType === 'professional' && (
          <>
            {blogPost.category && (
              <div className="mb-4">
                <h3 className="h4 fw-bold mb-3">Category</h3>
                <p>{blogPost.category}</p>
              </div>
            )}
          </>
        )}

        {/* Display tags if available */}
        {blogPost.tags && (
          <div className="mb-4">
            <h3 className="h4 fw-bold mb-3">Topics</h3>
            <div className="d-flex flex-wrap gap-2">
              {Array.isArray(blogPost.tags) 
                ? blogPost.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary">{tag}</span>
                  ))
                : <span className="badge bg-secondary">{blogPost.tag}</span>
              }
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-vh-100">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <article className="mb-5">
              {/* Back navigation */}
              <div className="mb-4">                <Link 
                  to={location.pathname.split('/').slice(0, -1).join('/')} 
                  className="text-decoration-none text-muted back-link"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="me-1" />
                  Back to {contentType.charAt(0).toUpperCase() + contentType.slice(1)} Articles
                </Link>
              </div>

              {/* Article image */}              <div className="mb-4">
                <img 
                  src={blogPost.image || blogPost.img} 
                  alt={blogPost.title} 
                  className="img-fluid rounded shadow article-image"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>

              {/* Article metadata */}
              <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                {blogPost.date && (
                  <span className="d-flex align-items-center gap-1">
                    <FontAwesomeIcon icon={faCalendar} className="me-1" />
                    {blogPost.date}
                  </span>
                )}
                <span className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon icon={faUser} className="me-1" />
                  {blogPost.author?.name || blogPost.author}
                </span>
                {blogPost.tags && (
                  <span className="d-flex align-items-center gap-1">
                    <FontAwesomeIcon icon={faTag} className="me-1" />
                    {Array.isArray(blogPost.tags) ? blogPost.tags.join(", ") : blogPost.tag}
                  </span>
                )}
                {blogPost.field && (
                  <span className="d-flex align-items-center gap-1">
                    <FontAwesomeIcon icon={faTag} className="me-1" />
                    {blogPost.field}
                  </span>
                )}
              </div>

              {/* Article title */}
              <h1 className="display-5 fw-bold mb-4">{blogPost.title}</h1>

              {/* Article content */}
              <div className="article-content">
                {renderContent()}
              </div>

              {/* Social sharing */}              <div className="border-top pt-4 mt-5">
                <h5 className="mb-3">Share this article:</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm social-share-button">
                    <FontAwesomeIcon icon={faFacebook} className="me-1" />
                    Share on Facebook
                  </button>
                  <button className="btn btn-outline-info btn-sm social-share-button">
                    <FontAwesomeIcon icon={faTwitter} className="me-1" />
                    Share on Twitter
                  </button>
                  <button className="btn btn-outline-primary btn-sm social-share-button">
                    <FontAwesomeIcon icon={faLinkedin} className="me-1" />
                    Share on LinkedIn
                  </button>
                </div>
              </div>
            </article>

            {/* Related articles */}
            {otherPosts.length > 0 && (
              <div className="mb-5">
                <h4 className="fw-bold mb-4">Related Articles</h4>
                <div className="row">
                  {otherPosts.map(post => (
                    <div key={post.id} className="col-md-6 mb-4">
                      <div className="card h-100 shadow-sm hover-scale">
                        <img 
                          src={post.image || post.img} 
                          className="card-img-top" 
                          alt={post.title}
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <h6 className="card-title">
                            <Link 
                              to={`${location.pathname.split('/').slice(0, -1).join('/')}/${post.id}`} 
                              className="text-decoration-none text-dark hover-primary"
                            >
                              {post.title}
                            </Link>
                          </h6>
                          <p className="card-text small text-muted">
                            {post.excerpt || post.description || post.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">            {/* Search */}
            <div className="card mb-4 shadow-sm sidebar-card">
              <div className="card-body">
                <h5 className="card-title">Search</h5>
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control border-end-0" 
                    placeholder="Search articles..." 
                    style={{ 
                      borderTopRightRadius: 0, 
                      borderBottomRightRadius: 0,
                      transition: 'all 0.2s ease-in-out'
                    }}
                  />
                  <button 
                    className="btn btn-primary" 
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>{/* Categories - only show for patient education */}
            {contentType === 'patient' && (
              <div className="card mb-4 shadow-sm sidebar-card">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-unstyled mb-0">
                    {categories.map((category, index) => (
                      <li key={index} className="mb-2">
                        <Link 
                          to="#" 
                          className="text-decoration-none text-dark d-flex justify-content-between align-items-center p-2 rounded hover-primary"
                          style={{ transition: 'all 0.2s ease-in-out' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bs-light)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          {category.name}
                          <span className="badge bg-primary rounded-pill">{category.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tags */}            <div className="card mb-4 shadow-sm sidebar-card">
              <div className="card-body">
                <h5 className="card-title">Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {(contentType === 'patient' ? tags : blogPost.tags || []).map((tag) => (
                    <Link key={tag} className="tag-badge" to="#">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="position-fixed bottom-0 end-0 m-4 btn btn-primary rounded-circle shadow p-3"
          style={{
            width: '50px',
            height: '50px',
            zIndex: 1000,
            transition: 'all 0.2s ease-in-out',
            opacity: showScrollTop ? 1 : 0
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} rotation={90} />
        </button>
      )}
    </div>
  );
}
