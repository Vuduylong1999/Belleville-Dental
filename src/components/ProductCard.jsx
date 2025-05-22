import React from "react";

const ProductCard = ({ image, tag, title, description, author }) => {
  return (
    <div className="card shadow-sm border-0" style={{ backgroundColor: '#eaf6ff', borderRadius: '10px' }}>
      <img src={image} className="card-img-top p-2" alt={title} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <span className="badge bg-dark mb-2">{tag}</span>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="card-text text-muted"><small>~{author}</small></p>
      </div>
    </div>
  );
};
export default ProductCard;