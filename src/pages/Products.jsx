import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Teeth from '../assets/teeth.png';
import './page.css'
import chungNhan from '../img/chung-nhan.svg'
import free from '../img/free.svg'
import hotline from '../img/hotline.svg'
import tuiSach from '../img/tui-sach.svg'
import banner1 from '../img/banner-sale.jpg'
import banner2 from '../img/banner-mouth-wash.jpg'
import banner3 from '../img/banner-toothpaste.jpg'
import ngonLua from '../img/flash-sale.png'
import tamNuoc from '../img/tam-nuoc.jpg'
import tamNuocTo from '../img/anh-tam-nuoc-to.png'
import nuocSucMiengTo from '../img/anh-nuoc-suc-mieng-to.png'
import banner_sale from '../img/banner-sale.jpg'
import { products, electricToothbrushes } from '../data/dental-products';


export default function Products() {
    const scrollRef = useRef(null);
    
    return (
        <div className="container-fluid p-0">
            <div className="banner-container mb-4">
                <img 
                    src={banner_sale} 
                    alt="Sale Banner" 
                    className="w-100" 
                    style={{
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <h3>Featured Products</h3>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {products.map((product) => (
                                <div className="col" key={product.id}>
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h3>Electric Toothbrushes</h3>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {electricToothbrushes.map((product) => (
                                <div className="col" key={product.id}>
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}