import React from "react";
import { useRef } from "react";
import ProductCard from "../components/ProductCard";
import Teeth from '../assets/teeth.png';
import './page.css'
import chungNhan from '../img/chung-nhan.svg'
import free from '../img/free.svg'
import hotline from '../img/hotline.svg'
import tuiSach from '../img/tui-sach.svg'
import hinhTo from '../img/hinh-to-product.png'
import ngonLua from '../img/ngon-lua.png'
import tamNuoc from '../img/tam-nuoc.jpg'
import tamNuocTo from '../img/anh-tam-nuoc-to.png'
import nuocSucMiengTo from '../img/anh-nuoc-suc-mieng-to.png'


export default function Products() {
    const scrollRef = useRef(null);const cards = [
    {
        title: "Electric Toothbrush",
        author: "Anita Jackson",
        price: "$16.99",
        mota: "Effectively cleans teeth with sonic vibration technology.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Self Care",
    },
    {
        title: "Daily Dental Care",
        author: "John Doe",
        price: "$12.99",
        mota: "Comprehensive oral care with advanced technology.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Self Care",
    },
    {
        title: "Healthy Smile",
        author: "Jane Smith",
        price: "$15.99",
        mota: "A radiant smile starts with proper care.",
        img: "https://www.pharmart.vn/images/product/430_430/laforin-500ml-nuoc-suc-mieng-diet-khuan-6455a7b998a11.jpg",
        tag: "Self Care",
    },
    {
        title: "Bright Smile Tips",
        author: "Jane Smith",
        price: "$17.99",
        mota: "Use top oral care products for a shining smile.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Self Care",
    },
];

const cards2 = [
    {
        title: "Electric Toothbrush Model A1",
        author: "Anita Jackson",
        price: "$16.99",
        mota: "Advanced electric toothbrush with sonic vibration technology for deep cleaning.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Electric Toothbrush Daily Care",
        author: "John Doe",
        price: "$12.99",
        mota: "Designed for daily use, ensuring fresh breath and healthy gums.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Electric Toothbrush Healthy Smile",
        author: "Jane Smith",
        price: "$15.99",
        mota: "Provides a radiant smile with ergonomic design .",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Electric Toothbrush Bright Smile Pro",
        author: "Jane Smith",
        price: "$17.99",
        mota: "Professional-grade toothbrush for superior plaque whitening.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Electric Toothbrush SonicX",
        author: "David Lee",
        price: "$18.99",
        mota: "Ultrasonic technology removes plaque effectively and gently massages gums.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Electric Toothbrush AquaClean Waterproof",
        author: "Emma Brown",
        price: "$16.99",
        mota: "IPX7 waterproof design, easy to clean and use in the bathroom.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "SmartBrush Electric Toothbrush",
        author: "Michael Johnson",
        price: "$20.99",
        mota: "Bluetooth connected, tracks brushing habits via mobile app.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
    {
        title: "Mini Travel Electric Toothbrush",
        author: "Sophia Williams",
        price: "$12.99",
        mota: "Compact design, convenient for travel and business trips.",
        img: "https://katatech.net/uploaded/tin-tuc/ban-chai-dien-co-chong-nuoc-khong-1.png",
        tag: "Electric Toothbrush",
    },
];

const cards3 = [
    {
        title: "Water Flosser Model W1",
        author: "Anita Jackson",
        price: "$16.99",
        mota: "Advanced water flosser with adjustable pressure settings for effective cleaning.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "Daily Use Water Flosser",
        author: "John Doe",
        price: "$12.99",
        mota: "Ideal for daily oral care, removes plaque and promotes healthy gums plaque and promotes hea.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "Healthy Smile Water Flosser",
        author: "Jane Smith",
        price: "$15.99",
        mota: "Ergonomic water flosser designed to gently clean between teeth and along gumline.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "Bright Smile Pro Water Flosser",
        author: "Jane Smith",
        price: "$17.99",
        mota: "Professional water flosser for superior plaque removal and gum care.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "Sonic Water Flosser SonicX",
        author: "David Lee",
        price: "$18.99",
        mota: "Sonic technology enhances cleaning power and massages gums effectively.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "AquaClean Waterproof Water Flosser",
        author: "Emma Brown",
        price: "$16.99",
        mota: "IPX7 waterproof design, easy to clean and perfect for bathroom use.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "SmartBrush Water Flosser",
        author: "Michael Johnson",
        price: "$20.99",
        mota: "Bluetooth-enabled water flosser tracks usage and customizes cleaning modes.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
    {
        title: "Mini Travel Water Flosser",
        author: "Sophia Williams",
        price: "$12.99",
        mota: "Compact and portable water flosser, perfect for travel and on-the-go use plaque and promotes hea.",
        img: "https://vinmart365.com/wp-content/uploads/2022/06/e02d6c808b9bff767389b6a504b7b6f6.jpg",
        tag: "Water Flosser",
    },
];

const cards4 = [
    {
        title: "Mouthwash FreshMint W1",
        author: "Anita Jackson",
        price: "$16.99",
        mota: "Advanced mouthwash with long-lasting freshness and antibacterial protection.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "Daily Use Mouthwash",
        author: "John Doe",
        price: "$12.99",
        mota: "Perfect for daily oral hygiene, helps fight plaque and keep breath fresh.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "Healthy Smile Mouthwash",
        author: "Jane Smith",
        price: "$15.99",
        mota: "Gentle yet effective mouthwash for gum care and a brighter smile.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "Bright Smile Pro Mouthwash",
        author: "Jane Smith",
        price: "$17.99",
        mota: "Professional-grade formula to eliminate bacteria and promote oral health.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "Sonic Fresh Mouthwash",
        author: "David Lee",
        price: "$18.99",
        mota: "Invigorating mint flavor with advanced cleansing technology.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "AquaClean Herbal Mouthwash",
        author: "Emma Brown",
        price: "$16.99",
        mota: "Natural herbal formula, alcohol-free and suitable for sensitive gums.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "SmartMint Mouthwash",
        author: "Michael Johnson",
        price: "$20.99",
        mota: "Smartly formulated mouthwash for strong, lasting breath control.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
    {
        title: "Travel Size Mouthwash",
        author: "Sophia Williams",
        price: "$12.99",
        mota: "Compact, TSA-friendly bottle for fresh breath wherever you go.",
        img: "https://nhakhoaasia.com/datafiles/may-lay-cao-rang-tai-nha-1.jpeg",
        tag: "Mouthwash",
    },
];




    return <>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="700">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={hinhTo} class="d-block w-100 h-auto" alt="..." />
                </div>
                <div class="carousel-item ">
                    <img src='https://nhakhoadaisy.vn/wp-content/uploads/2024/09/dung-cu-lay-cao-rang-3.jpg' class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item anh-to tam-nuoc-to ">
                    <img src={nuocSucMiengTo} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        <div className="container" >
            <div className="mt-5 mb-5 row">
                <div className="col-3">
                    <div className="d-flex justify-content-center gap-4 bg-free">
                        <img src={free} alt="" />
                        <div>
                            <p className="fw-semibold mb-0">Free Shipping</p>
                            <p className="mb-0">For orders from 5 million VND</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center gap-4 bg-free bg-tui-sach">
                        <img src={tuiSach} alt="" />
                        <div>
                            <p className="fw-semibold mb-0">Attractive Gifts</p>
                            <p className="mb-0">For orders from 10 million VND</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center gap-4 bg-free bg-chung-nhan">
                        <img src={chungNhan} alt="" />
                        <div>
                            <p className="fw-semibold mb-0">Quality Certification</p>
                            <p className="mb-0">Authentic Products</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center gap-4 bg-free bg-hotline">
                        <img src={free} alt="" />
                        <div>
                            <p className="fw-semibold mb-0">Hotline: 1900 6750</p>
                            <p className="mb-0">24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sale text-white  mt-4" >


                <div className="d-flex align-items-center gap-3 " >
                    <p className="thanh-tieu-de" >
                        HOT SALE WEEK END
                    </p>
                    <img className="mb-4" src={ngonLua} alt="" />
                </div>

                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-md-3 mb-4 pr-san-pham img-hover" key={index}>
                            <div className="card shadow-sm h-100">
                                <img src={card.img} className="card-img-top h-100" alt="Ảnh bài viết" />
                                <div className="card-body">
                                    <span className="badge bg-primary mb-2">{card.tag}</span>

                                    <h5 className="card-title">
                                        {card.title || <em className="text-muted">No title</em>}
                                    </h5>

                                    {card.mota && (
                                        <p className="card-text text-muted">{card.mota}</p>
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mt-2 thanh-tieu-de ">
                                        <div className="d-flex flex-column">
                                            {card.price ? (
                                                <span className="text-danger fw-bold">{card.price}</span>
                                            ) : (
                                                <span className="text-muted">Price updating</span>
                                            )}
                                            <p className="gia-goc mb-0" >
                                                $30.99
                                            </p>
                                        </div>
                                        <button className="btn btn-outline-primary mua-ngay-blog py-1 px-2">
                                            Buy Now
                                        </button>
                                    </div>

                                    <p className="text-end text-muted mb-0 mt-2">
                                        ~ {card.author || "Tác giả ẩn danh"}
                                    </p>
                                </div>
                            </div>
                            <div className="giam-41" >
                                41% Off
                            </div>
                            <div className="tra-gop-0" >
                                0% Installment
                            </div>
                            <div className="bao-hanh-12" >
                                12-Month Warranty
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div >
                <p className="articles text-center mt-4 mb-0" >
                    ELETRIC TOOTHBRUSH
                </p>
                <p className="mo-ta text-center fw-semibold" >
                    (Bàn chải điện)
                </p>
            </div>
            <div className="row">
                {cards2.map((card, index) => (
                    <div className="col-md-3 mb-4 pr-san-pham img-hover" key={index}>
                        <div className="card shadow-sm h-100">
                            <img src={card.img} className="card-img-top " alt="Ảnh bài viết" />
                            <div className="card-body">
                                <span className="badge bg-primary mb-2">{card.tag}</span>

                                <h5 className="card-title">
                                    {card.title || <em className="text-muted">No title</em>}
                                </h5>

                                {card.mota && (
                                    <p className="card-text text-muted">{card.mota}</p>
                                )}

                                <div className="d-flex justify-content-between align-items-center mt-2 thanh-tieu-de ">
                                    <div className="d-flex flex-column">
                                        {card.price ? (
                                            <span className="text-danger fw-bold">{card.price}</span>
                                        ) : (
                                            <span className="text-muted">Price updating</span>
                                        )}
                                        <p className="gia-goc mb-0  " >
                                            $30.99
                                        </p>
                                    </div>
                                    <button className="btn btn-outline-primary mua-ngay-blog">
                                        Buy Now
                                    </button>
                                </div>

                                <p className="text-end text-muted mb-0 mt-2">
                                    ~ {card.author || "Tác giả ẩn danh"}
                                </p>
                            </div>
                        </div>
                        <div className="giam-41" >
                            41% Off
                        </div>
                        <div className="tra-gop-0" >
                            0% Installment
                        </div>
                        <div className="bao-hanh-12" >
                            12-Month Warranty
                        </div>
                    </div>
                ))}
            </div>
            <div >
                <p className="articles text-center mt-4 mb-0" >
                    WATER FLOSSER
                </p>
                <p className="mo-ta text-center fw-semibold" >
                    (TĂM NƯỚC)
                </p>
            </div>
            <div className="row">
                {cards3.map((card, index) => (
                    <div className="col-md-3 mb-4 pr-san-pham img-hover" key={index}>
                        <div className="card shadow-sm h-100">
                            <img src={card.img} className="card-img-top " alt="Ảnh bài viết" />
                            <div className="card-body">
                                <span className="badge bg-primary mb-2">{card.tag}</span>

                                <h5 className="card-title">
                                    {card.title || <em className="text-muted">No title</em>}
                                </h5>

                                {card.mota && (
                                    <p className="card-text text-muted">{card.mota}</p>
                                )}

                                <div className="d-flex justify-content-between align-items-center mt-2 thanh-tieu-de ">
                                    <div className="d-flex flex-column">
                                        {card.price ? (
                                            <span className="text-danger fw-bold">{card.price}</span>
                                        ) : (
                                            <span className="text-muted">Price updating</span>
                                        )}
                                        <p className="gia-goc mb-0  " >
                                            $30.99
                                        </p>
                                    </div>
                                    <button className="btn btn-outline-primary mua-ngay-blog">
                                        Buy Now
                                    </button>
                                </div>

                                <p className="text-end text-muted mb-0 mt-2">
                                    ~ {card.author || "Tác giả ẩn danh"}
                                </p>
                            </div>
                        </div>
                        <div className="giam-41" >
                            41% Off
                        </div>
                        <div className="tra-gop-0" >
                            0% Installment
                        </div>
                        <div className="bao-hanh-12" >
                            12-Month Warranty
                        </div>
                    </div>
                ))}
            </div>
            <div >
                <p className="articles text-center mt-4 mb-0" >
                    MOUTHWASH
                </p>
                <p className="mo-ta text-center fw-semibold" >
                    (NƯỚC SÚC MIỆNG)
                </p>
                <div className="row">
                    {cards4.map((card, index) => (
                        <div className="col-md-3 mb-4 pr-san-pham img-hover" key={index}>
                            <div className="card shadow-sm h-100">
                                <img src={card.img} className="card-img-top " alt="Ảnh bài viết" />
                                <div className="card-body">
                                    <span className="badge bg-primary mb-2">{card.tag}</span>

                                    <h5 className="card-title">
                                        {card.title || <em className="text-muted">No title</em>}
                                    </h5>

                                    {card.mota && (
                                        <p className="card-text text-muted">{card.mota}</p>
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mt-2 thanh-tieu-de ">
                                        <div className="d-flex flex-column">
                                            {card.price ? (
                                                <span className="text-danger fw-bold">{card.price}</span>
                                            ) : (
                                                <span className="text-muted">Price updating</span>
                                            )}
                                            <p className="gia-goc mb-0  " >
                                                $30.99
                                            </p>
                                        </div>
                                        <button className="btn btn-outline-primary mua-ngay-blog">
                                            Buy Now
                                        </button>
                                    </div>

                                    <p className="text-end text-muted mb-0 mt-2">
                                        ~ {card.author || "Tác giả ẩn danh"}
                                    </p>
                                </div>
                            </div>
                            <div className="giam-41" >
                                41% Off
                            </div>
                            <div className="tra-gop-0" >
                                0% Installment
                            </div>
                            <div className="bao-hanh-12" >
                                12-Month Warranty
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}