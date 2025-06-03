import React from 'react';
import { Container, Row, Col, Carousel, Card, Badge } from 'react-bootstrap';
import banChaiTrong from '../img/anh-ban-chai-ben-trong1.png';
import banChai2 from '../img/ban-chai-dien-2.webp';
import banChai3 from '../img/ban-chai-dien-3.webp';
import banChaiMoTa from '../img/ban-chai-mo-ta-1.webp';
import banChaiMoTa2 from '../img/ban-chai-mo-ta2.webp';
import banChaiMota3 from '../img/ban-chai-mo-ta3.webp';
import banChaiMoTa4 from '../img/ban-chai-mo-ta4.webp';
import './page.css';

import { useParams } from 'react-router-dom';
import { products, electricToothbrushes } from '../data/dental-products';

export default function ProductDetail() {
    const { id } = useParams();
    const product = [...products, ...electricToothbrushes].find(p => p.id === Number(id));
    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>                    <h1 className="display-4 fw-bold mb-3">{product?.title}</h1>
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="text-warning">
                            {'★'.repeat(Math.floor(product?.rating || 0))}
                            {'☆'.repeat(5 - Math.floor(product?.rating || 0))}
                        </div>
                        {product?.reviews && (
                            <span className="text-muted">({product.reviews.length} reviews)</span>
                        )}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    <div className="product-gallery mb-4">                        <Carousel interval={null} className="bg-light rounded-4 overflow-hidden">
                            <Carousel.Item>
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                                    <img
                                        src={product?.img}
                                        alt={product?.title}
                                        style={{ maxHeight: '80%', maxWidth: '80%', objectFit: 'contain' }}
                                    />
                                </div>
                                {product?.specifications && (
                                    <div className="carousel-caption bg-dark bg-opacity-75 bottom-0 start-0 end-0 m-0 p-4">
                                        <div className="row g-4">
                                            {product.specifications['Vibration Speed'] && (
                                                <div className="col-md-4">
                                                    <i className="bi bi-lightning-charge fs-3"></i>
                                                    <p>{product.specifications['Vibration Speed']}</p>
                                                </div>
                                            )}
                                            {product.specifications['Water Resistance'] && (
                                                <div className="col-md-4">
                                                    <i className="bi bi-droplet fs-3"></i>
                                                    <p>{product.specifications['Water Resistance']}</p>
                                                </div>
                                            )}
                                            {product.specifications['Battery Life'] && (
                                                <div className="col-md-4">
                                                    <i className="bi bi-battery-charging fs-3"></i>
                                                    <p>{product.specifications['Battery Life']}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Carousel.Item>
                        </Carousel>

                        <div className="thumbnails d-flex gap-2 mt-3">
                            <img src={product?.img} className="thumb" alt={product?.title} width="60" height="60" />
                        </div>
                    </div>

                    <div className="product-info">                        <Card className="mb-4">
                            <Card.Body>
                                <h2 className="h4 mb-4">Product Description</h2>
                                <p className="lead mb-4">
                                    {product?.longDescription || product?.mota}
                                </p>
                                <Row className="g-4">
                                    <Col md={6}>
                                        <h3 className="h5 mb-3">Key Features</h3>
                                        <ul className="list-unstyled">
                                            {product?.features ? (
                                                product.features.map((feature, index) => (
                                                    <li className="mb-2" key={index}>
                                                        <i className="bi bi-check2-circle text-primary me-2"></i>
                                                        {feature}
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="mb-2">
                                                    <i className="bi bi-check2-circle text-primary me-2"></i>
                                                    {product?.mota}
                                                </li>
                                            )}
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <h3 className="h5 mb-3">What's Included</h3>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <i className="bi bi-box text-primary me-2"></i>
                                                1x SmartClean brush handle
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-box text-primary me-2"></i>
                                                1x Premium brush head
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-box text-primary me-2"></i>
                                                1x USB-C charging cable
                                            </li>
                                            <li className="mb-2">
                                                <i className="bi bi-box text-primary me-2"></i>
                                                User manual
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Col md={4}>
                    <Card className="position-sticky" style={{ top: '2rem' }}>
                        <Card.Body>                            <div className="price-section mb-4">
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="display-6 mb-0">{product?.price}</h2>
                                    {product?.oldPrice && (
                                        <div>
                                            <p className="text-decoration-line-through text-muted mb-0">{product.oldPrice}</p>
                                            <Badge bg="danger">
                                                Save {Math.round(((parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.oldPrice.replace('$', ''))) * 100)}%
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="color-options mb-4">
                                <h3 className="h5 mb-3">Select Color</h3>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-primary d-flex align-items-center p-3">
                                        <img src={banChai2} width="40" height="40" className="me-3" alt="Blue" />
                                        <div className="text-start">
                                            <div>Ocean Blue</div>
                                            <small className="text-primary">$16.99</small>
                                        </div>
                                    </button>
                                    <button className="btn btn-outline-primary d-flex align-items-center p-3">
                                        <img src={banChai3} width="40" height="40" className="me-3" alt="Pink" />
                                        <div className="text-start">
                                            <div>Rose Pink</div>
                                            <small className="text-primary">$16.99</small>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="action-buttons mb-4">
                                <button className="btn btn-primary w-100 mb-2">Add to Cart</button>
                                <button className="btn btn-outline-primary w-100">Buy Now</button>
                            </div>

                            <div className="shipping-info">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <i className="bi bi-truck"></i>
                                    <span>Free shipping on orders over $50</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <i className="bi bi-shield-check"></i>
                                    <span>2-year warranty included</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-arrow-counterclockwise"></i>
                                    <span>30-day money-back guarantee</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">                <Col>
                    <h2 className="h3 mb-4">Technical Specifications</h2>
                    {product?.specifications ? (
                        <table className="table">
                            <tbody>
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <tr key={key}>
                                        <th>{key}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-muted">Specifications not available for this product.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}