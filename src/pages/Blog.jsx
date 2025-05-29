import React, { useRef } from "react";
import './page.css'



export default function Blog() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    };

    const cards = [
        {
            title: "Electric Toothbrush",
            author: "Anita Jackson",
            price: "đ379.000",
            mota: "Effectively cleans teeth with sonic vibration technology.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Daily Dental Care",
            author: "John Doe",
            price: "đ299.000",
            mota: "Comprehensive oral care with advanced technology.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            price: "đ359.000",
            mota: "A radiant smile starts with proper care.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Bright Smile Tips",
            author: "Jane Smith",
            price: "đ415.000",
            mota: "Use top oral care products for a shining smile.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Fresh Breath Daily",
            author: "Jane Smith",
            price: "đ280.000",
            mota: "Effectively cleans and deodorizes the mouth.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Shine Everyday",
            author: "Jane Smith",
            price: "đ349.000",
            mota: "Stay confident with a bright and germ-free smile.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Gum Health Protection",
            author: "Jane Smith",
            price: "đ399.000",
            mota: "Specially made for sensitive teeth and weak gums.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Morning Freshness",
            author: "Jane Smith",
            price: "đ329.000",
            mota: "Start your day with fresh breath and confident smile.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
    ];



    return <>

        <div className="container">


            <div className="text-center khung-blogs">
                <p className="blogs mt-5" >
                    Blogs
                </p>
                <p className="mo-ta mt-2 " >
                    Nụ cười khỏe – Hành trình bắt đầu từ từng dòng chữ. Cùng chúng tôi chăm sóc răng miệng, từ kiến thức đến hành động mỗi ngày.
                </p>
            </div>
            <div className="container py-5 mt-5">


                <div
                    className="d-flex overflow-auto gap-3 px-2"
                    style={{ scrollBehavior: 'smooth' }}
                    ref={scrollRef}
                >
                    {cards.map((card, index) => (
                        <div className="card shadow-sm flex-shrink-0" style={{ width: '300px' }} key={index}>
                            <img src={card.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="badge bg-primary mb-2">{card.tag}</span>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text text-muted">
                                    {card.mota}
                                </p>
                                <div class="mt-1 d-flex justify-between items-center gap-3 align-items-center">
                                    <span class="text-danger font-bold text-lg fw-bold">{card.price}</span>
                                    <button class=" s px-4 py-2 mua-ngay-blog">Mua ngay</button>
                                </div>
                                <p className="text-end text-muted mb-0">
                                    ~{card.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center mb-3 gap-2 mt-3">
                    <button className="btn btn-dark" onClick={scrollLeft}>←</button>
                    <button className="btn btn-dark" onClick={scrollRight}>→</button>
                </div>
            </div>
            <div>
                <p className="articles">Articles</p>

                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card shadow-sm h-100">
                                <img src={card.img} className="card-img-top" alt="Ảnh bài viết" />
                                <div className="card-body">
                                    <span className="badge bg-primary mb-2">{card.tag}</span>

                                    <h5 className="card-title">
                                        {card.title || <em className="text-muted">Không có tiêu đề</em>}
                                    </h5>

                                    {card.mota && (
                                        <p className="card-text text-muted">{card.mota}</p>
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        {card.price ? (
                                            <span className="text-danger fw-bold">{card.price}</span>
                                        ) : (
                                            <span className="text-muted">Giá đang cập nhật</span>
                                        )}
                                        <button className="btn btn-outline-primary mua-ngay-blog">
                                            Mua ngay
                                        </button>
                                    </div>

                                    <p className="text-end text-muted mb-0 mt-2">
                                        ~ {card.author || "Tác giả ẩn danh"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </>
}