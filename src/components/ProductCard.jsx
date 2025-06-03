import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, tag, title, mota, author, rating, price, oldPrice }) => {
  return (
    <div className="card shadow-sm border-0 h-100 overflow-hidden" style={{ backgroundColor: '#eaf6ff', borderRadius: '10px' }}>
      <Link to={`/products/${id}`} className="text-decoration-none">
        <div className="position-relative bg-white" style={{ height: '320px', overflow: 'hidden' }}>
          <img 
            src={img} 
            className="card-img-top w-100 h-100" 
            alt={title} 
            style={{ 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }} 
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </Link>
      <div className="card-body d-flex flex-column pt-4">
        <Link to={`/products/${id}`} className="text-decoration-none text-dark">
          <h5 className="card-title fw-bold text-center mb-3">{title}</h5>
        </Link>
        <p className="card-text text-muted text-center mb-3" style={{ fontSize: '0.9rem' }}>{mota}</p>
        <div className="mt-auto text-center">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="d-flex align-items-baseline gap-2">
              <span className="text-primary fw-bold fs-5">${price}</span>
              {oldPrice}
            </div>    
            <div className="text-warning">
              {'★'.repeat(Math.floor(rating || 0))}
              {'☆'.repeat(5 - Math.floor(rating || 0))}
              <span className="text-muted ms-2">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;