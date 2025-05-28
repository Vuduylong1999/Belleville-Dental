import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card as RBCard, Button } from 'react-bootstrap';

const CardSlider = ({ cards }) => {
    return (
        <div className="text-center py-5" style={{ backgroundColor: '#rgba(255, 255, 255, 1)' }}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3.3} // 👈 Số thập phân giúp slide 4 hiện ra một phần
                navigation
                loop={false}
                breakpoints={{
                    0: { slidesPerView: 1.1 },
                    768: { slidesPerView: 2.2 },
                    992: { slidesPerView: 3.3 }, // 👈 tùy chỉnh theo kích thước màn hình
                }}
            >
                {cards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <RBCard style={{ backgroundColor: '#eaf6fc', border: 'none' }}>
                            <RBCard.Img variant="top" src={item.img} />
                            <RBCard.Body>
                                <div className="d-flex mb-3 justify-content-between align-items-center">
                                    <Button variant="dark" size="sm" className="mb-2">
                                        {item.tag}
                                    </Button>
                                    <RBCard.Subtitle className="mb-1 text-muted fw-bold">
                                        ~{item.author}
                                    </RBCard.Subtitle>
                                </div>
                                <RBCard.Title className="fw-bold">{item.title}</RBCard.Title>
                                <RBCard.Text>{item.desc}</RBCard.Text>
                            </RBCard.Body>
                        </RBCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;