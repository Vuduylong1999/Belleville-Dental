import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faStar as faStarSolid,
  faCartPlus,
  faCheck,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { products, electricToothbrushes } from '../data/dental-products';
import ProductRating from '../components/ProductRating';

export default function ProductDetail() {
  const { id } = useParams();
  const product = [...products, ...electricToothbrushes].find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2>Product not found</h2>
        <p className="text-muted">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= Math.floor(rating) ? faStarSolid : faStarRegular}
          className="text-warning"
        />
      );
    }
    return stars;
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleColorSelect = (index) => {
    setSelectedColor(index);
    if (product.colors) {
      setSelectedImage(index + 1); // +1 because first image is main product image
    }
  };

  return (
    <div className="container my-5">
      {/* Back Navigation */}
      <div className="mb-4">
        <Link to="/products" className="text-decoration-none text-muted">
          <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
          Back to Products
        </Link>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {/* Main Content */}
          <article>
            {/* Product Image Gallery */}
            <div className="position-relative mb-4">
              <img
                src={product.images ? product.images[selectedImage] : product.img}
                alt={product.title}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
              
              {product.images && (
                <div className="d-flex gap-2 mt-3 overflow-auto py-2">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className={`rounded cursor-pointer ${selectedImage === index ? 'border border-primary' : ''}`}
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'cover',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Header */}
            <div className="mb-4">
              <h1 className="display-5 fw-bold">{product.title}</h1>
              <div className="d-flex align-items-center gap-3 text-muted mb-3">
                <span className="d-flex align-items-center">
                  {renderStars(product.rating)}
                  <span className="ms-2">{product.rating} out of 5</span>
                </span>
              </div>
            </div>

            {/* Short Description */}
            {product.mota && (
              <div className="mb-4">
                <p className="lead">{product.mota}</p>
              </div>
            )}

            {/* Key Features */}
            {product.keyFeatures && (
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3">Key Features</h2>
                <div className="bg-light p-4 rounded">
                  <ul className="list-unstyled mb-0">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-primary mt-1 me-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* What's in the Box */}
            {product.inclusions && (
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3">What's in the Box</h2>
                <div className="bg-light p-4 rounded">
                  <ul className="list-unstyled mb-0">
                    {product.inclusions.map((item, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-primary mt-1 me-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3">Technical Specifications</h2>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key}>
                          <th style={{ width: '30%' }} className="text-capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </th>
                          <td>
                            {Array.isArray(value) 
                              ? value.join(', ')
                              : typeof value === 'object'
                                ? Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ')
                                : value.toString()
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Product Rating Form */}
            <div className="mb-5">
              <ProductRating 
                productId={product.id} 
                onRatingSubmit={async (reviewData) => {
                  // In a real app, this would be an API call
                  console.log('New review:', reviewData);
                  alert('Thank you for your review!');
                }} 
              />
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          {/* Sidebar */}          <div className="card shadow-sm mb-4 position-sticky" style={{ top: '6rem' }}>
            <div className="card-body p-4">
              <h3 className="card-title h5 fw-bold mb-4">Purchase Information</h3>
                {/* Price */}
              <div className="mb-3">
                <div className="d-flex align-items-baseline gap-3">
                  <span className="h2 text-primary fw-bold mb-0">${product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className="text-muted text-decoration-line-through fs-5">
                        ${product.oldPrice}
                      </span>
                      <span className="badge bg-danger">
                        -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <div className="text-success small mt-2">
                  <FontAwesomeIcon icon={faCheck} className="me-1" />
                  In Stock
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-4">
                  <h4 className="h6 fw-bold mb-3">Available Colors</h4>
                  <div className="d-flex gap-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`p-2 border rounded ${selectedColor === index ? 'border-primary' : ''}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleColorSelect(index)}
                      >
                        <img 
                          src={color.image} 
                          alt={color.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        <div className="small text-center mt-1">{color.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <button className="btn btn-primary w-100 mb-3">
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                Add to Cart
              </button>
              <button className="btn btn-outline-primary w-100">Buy Now</button>

              {/* Additional Information */}
              {product.warranty && (
                <div className="mt-4">
                  <div className="d-flex align-items-start gap-2 text-muted small">
                    <FontAwesomeIcon icon={faInfoCircle} className="mt-1" />
                    <div>
                      <strong>Warranty:</strong> {product.warranty.duration} - {product.warranty.terms}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
