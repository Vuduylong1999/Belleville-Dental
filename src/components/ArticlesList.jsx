import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
    const [sortType, setSortType] = useState('New');
    const navigate = useNavigate();    const handleArticleClick = (article) => {
        const path = window.location.pathname;
        if (path.includes('/education/patient')) {
            navigate(`/education/patient/${article.id}`);
        } else if (path.includes('/education/professional')) {
            navigate(`/education/professional/${article.id}`);
        } else if (path.includes('/education/researchs')) {
            navigate(`/education/researchs/${article.id}`);
        }
    };

    return (
        <div className=" px-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Articles  </h2>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Sort by: {sortType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortType('New')}>New</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortType('Popular')}>Popular</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="row py-3">
                {articles.slice(0, 8).map((article, idx) => (
                    <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                        <Card 
                            className="flex-fill d-flex flex-column" 
                            style={{ 
                                backgroundColor: '#eaf6fc', 
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleArticleClick(article)}
                        >
                            <Card.Img
                                variant="top"
                                src={article.img}
                                style={{ height: 180, objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex justify-content-start flex-wrap gap-1 mb-2">
                                    {article.tags.map((tag, i) => (
                                        <Button key={i} variant="dark" size="sm">{tag}</Button>
                                    ))}
                                </div>
                                <Card.Title className="fw-bold">{article.title}</Card.Title>
                                <Card.Text className="flex-grow-1">{article.desc}</Card.Text>
                                <Card.Subtitle className="text-muted text-end">~{article.author}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="text-center mt-1">
                <Button variant="primary" className="rounded px-5 py-2 fw-bold" >Check out more</Button>
            </div>
        </div>
    );
};

export default ArticlesList;
