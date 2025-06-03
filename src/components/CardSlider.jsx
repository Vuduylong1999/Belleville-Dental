import React from 'react';
import { Card as RBCard, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const CardSlider = ({ cards }) => {
    const navigate = useNavigate();  
    const handleCardClick = (cardId) => {
        const path = window.location.pathname;
        if (path.includes('/education/patient')) {
            navigate(`/education/patient/${cardId}`);
        } else if (path.includes('/education/professional')) {
            navigate(`/education/professional/${cardId}`);
        } else if (path.includes('/education/researchs')) {
            navigate(`/education/researchs/${cardId}`);
        }
    };

    return (
        <div className="container py-3">
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                }}
            >
                {cards.map((item, index) => (
                    <SwiperSlide key={index} style={{ height: 'auto' }}>
                        <RBCard
                            style={{ backgroundColor: '#eaf6fc', border: 'none', height: '100%', cursor: 'pointer' }}
                            onClick={() => handleCardClick(index + 1)}
                        >
                            <RBCard.Img variant="top" src={item.img} style={{ objectFit: 'cover' }} />
                            <RBCard.Body className="d-flex flex-column">
                                <div className="d-flex mb-3 justify-content-between align-items-center">
                                    <Button variant="dark" size="sm" className="mb-2">
                                        {item.tag}
                                    </Button>
                                    <RBCard.Subtitle className="mb-1 text-muted fw-bold">
                                        ~{item.author}
                                    </RBCard.Subtitle>
                                </div>
                                <RBCard.Title className="fw-bold">{item.title}</RBCard.Title>
                                <RBCard.Text className="flex-grow-1">{item.desc}</RBCard.Text>
                            </RBCard.Body>
                        </RBCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;