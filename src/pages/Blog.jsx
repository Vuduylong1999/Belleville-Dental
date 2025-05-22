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
            title: "Bàn chải đánh răng điện",
            author: "Anita Jackson",
            price: "đ379.000",
            mota: "Giúp làm sạch răng hiệu quả với công nghệ rung sóng âm.",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Dental Checkup",
            author: "John Doe",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-meo-ngau-43.jpg",
            tag: "Self Care",
        },
        // Thêm card tùy ý
    ];

    return <>


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
    </>
}