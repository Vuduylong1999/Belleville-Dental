import React, {useRef} from "react";
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
            title: "Care of your Teeth",
            author: "Anita Jackson",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
            tag: "Self Care",
        },
        {
            title: "Dental Checkup",
            author: "John Doe",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
            tag: "Self Care",
        },
        {
            title: "Healthy Smile",
            author: "Jane Smith",
            img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaKj0sbOI0nrVXLnFYC2anaYF2nF4meK00njokXMzoA98ouMfN4BQbu36-EkTtgrnH8KnYOl9R6fep9RMmPnUQglS7EkCvJ2cmwQBKHnc5OSVn6R5DAtfeBmLorbzQjIqT-O-oQhjvzDbBbISlzSb0lhaC?key=tE_qip6BHPL4g00JXL_X6Q",
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
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
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