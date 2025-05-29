import React from "react";
import saoVang from '../img/saovang.svg'
import './page.css'
import banChaiTrong from '../img/anh-ban-chai-ben-trong1.png'
import banChai2 from '../img/ban-chai-dien-2.webp'
import banChai3 from '../img/ban-chai-dien-3.webp'
import banChai2Doi from '../img/ban-chai-dien-2-doi.webp'
import banChai3Doi from '../img/ban-chai-dien-3-doi.webp'
import banChai4 from '../img/ban-chai-dien-4.webp'
import banChai5 from '../img/ban-chai-dien-5.webp'
import banChai6 from '../img/ban-chai-dien-6.webp'
import banChai7 from '../img/ban-chai-dien-7.webp'
import banChai8 from '../img/ban-chai-dien-8.webp'
import banChai9 from '../img/ban-chai-dien-9.webp'
import banChai10 from '../img/ban-chai-dien-10.webp'
import gioHang from '../img/them-vao-gio-ne.png'
import banChaiMoTa from '../img/ban-chai-mo-ta-1.webp'
import banChaiMoTa2 from '../img/ban-chai-mo-ta2.webp'
import banChaiMota3 from '../img/ban-chai-mo-ta3.webp'
import banChaiMoTa4 from '../img/ban-chai-mo-ta4.webp'

export default function DetailProduct() {

    return <>
        <div className="container" >
            <div className="d-flex mt-2 mb-2 gap-3 align-items-center" >
                <p className="thanh-tieu-de m-0">Bàn chải điện làm sạch sâu Halio Sonic Smartclean Electric Toothbrush</p>
                <div>
                    <img src={saoVang} alt="" />
                    <img src={saoVang} alt="" />
                    <img src={saoVang} alt="" />
                    <img src={saoVang} alt="" />
                    <img src={saoVang} alt="" />
                </div>
            </div>
            <div className="thanh-ngang-giua" >

            </div>
            <div className="d-flex flex-nowrap mt-3 mb-3 "   >
                <div className="col-8" >

                    <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner bg-white">
                            <div className="carousel-item active bg-hong khung-ban-chai  ">
                                <img src={banChaiTrong} className="d-block  img-banChai1" alt="..." />
                                <div className="boder-khung text-white" >
                                    <div className="tinh-nang-noi-bat">
                                        <p className="text-semibold">KEY FEATURES</p>
                                    </div>
                                    <div className="chu-trong-khung-ban-chai">
                                        <ul>
                                            <li>Sonic technology with 42,000 vibrations/min for more effective cleaning</li>
                                            <li>Quiet Maglev motor, 4 modes suitable for all needs</li>
                                            <li>Zone change reminder, 2-minute timer, remembers frequently used settings</li>
                                            <li>IPX7 waterproof, fast Type-C charging, 800mAh Lithium-Ion battery lasts 25 days</li>
                                            <li>Antibacterial Dupont brush head with soft bristles, gentle on gums</li>
                                        </ul>
                                    </div>


                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai2} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai3} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai2Doi} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai3Doi} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai4} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai5} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai6} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai7} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai8} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai9} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="khung-ban-chai2" >
                                    <img src={banChai10} className="d-block ban-chai2 " alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-3 d-flex justify-content-center gap-2 me-5">
                        <img src={banChaiTrong} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="0" />
                        <img src={banChai2} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="1" />
                        <img src={banChai3} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="2" />
                        <img src={banChai2Doi} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="3" />
                        <img src={banChai3Doi} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="4" />
                        <img src={banChai4} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="5" />
                        <img src={banChai5} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="6" />
                        <img src={banChai6} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="7" />
                        <img src={banChai7} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="8" />
                        <img src={banChai8} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="9" />
                        <img src={banChai9} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="10" />
                        <img src={banChai10} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="11" />
                    </div>
                    <div className="row khung-chi-tiet mt-4 w-856 mx-1" >
                        <div className="col-6" >
                            <p className="thanh-tieu-de mt-2" >Product Information</p>
                            <ul className="thong-tin-san-pham" >
                                <li>New, complete accessories from the manufacturer</li>
                                <li>1 x Brush handle, 1 x Brush head, 1 x USB-C charging cable, 1 x User manual</li>
                                <li>12-month official warranty at authorized service centers, 1-to-1 exchange within 30 days if hardware defects from the manufacturer occur.</li>
                                <li>Product price includes VAT</li>
                            </ul>
                        </div>
                        <div className="col-6" >
                            <p className="thanh-tieu-de mt-2 mx-3" >Advanced Technology</p>
                            <ul className="thong-tin-san-pham" >
                                <li><p>Sonic dual-frequency technology</p> cleans leftover food in the hardest-to-reach areas</li>
                                <li><p>High durability Maglev motor</p> reduces noise, operates efficiently</li>
                                <li><p>5 oral care modes</p> to meet various usage needs</li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="col-4 mx-" >
                    <div className="d-flex gap-2 " >
                        <p className="gia-giam" >379.000đ</p>
                        <p className="gia-goc" >900.000đ</p>
                    </div>
                    <p className="fw-bolder">Select a color to see the price and available branches</p>
                    <div className="d-flex gap-3">
                        <div className="d-flex khung-xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="1">
                            <img src={banChai2} width="60" height="60" data-bs-target="#myCarousel" data-bs-slide-to="1" />
                            <div>
                                <p className="xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="1">Blue</p>
                                <p className="gia-xanh-duong">379,000 VND</p>
                            </div>
                        </div>
                        <div className="d-flex khung-xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="2">
                            <img src={banChai3} width="60" height="60" data-bs-target="#myCarousel" data-bs-slide-to="2" />
                            <div>
                                <p className="xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="2">Pink</p>
                                <p className="gia-xanh-duong">379,000 VND</p>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-3" >
                        <div className="d-flex gap-3 align-items-center">
                            <div className="bg-mua-ngay text-white p-2">
                                <p className="text-center">BUY NOW</p>
                                <p>(Fast delivery within 2 hours or pick up at the store)</p>
                            </div>
                            <img className="gio-hang" src={gioHang} alt="" />
                        </div>
                        <div className="bg-tra-gop text-center p-2 mt-3">
                            <p>0% INSTALLMENT PLAN</p>
                            <p>Down payment from only 37,900 VND</p>
                        </div>
                        <div className="mt-3 boder-khung-uu-dai mb-3">
                            <p className="fw-semibold bg-uu-dai-them">ADDITIONAL OFFERS</p>
                            <ul>
                                <li>Check out the promotional policy for Smember members</li>
                                <li>Get up to 2 million VND cashback when opening an HSBC credit card</li>
                                <li>Up to 1 million VND discount when paying via Muadee by HDBank card</li>
                                <li>400,000 VND discount when paying by Home Credit credit card</li>
                                <li>Kredivo - up to 500,000 VND discount when paying via Kredivo</li>
                                <li>200,000 VND discount for installment payments with Visa Sacombank card via MPOS</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="thanh-ngang-giua" >

            </div>
            <div className="row " >
                <div className="col-8" >
                    <div className="khung-chi-tiet p-3 mt-4">
                        <div className="dac-diem-noi-bat bg-khung-noi-bat p-2">
                            <p className="fw-bold text-danger text-center">Key Features</p>
                            <ol>
                                <li>Sonic wave technology with 42,000 vibrations per minute for more effective cleaning</li>
                                <li>Quiet Maglev motor, 4 modes suitable for all needs</li>
                                <li>Zone reminder, 2-minute timer, memory for frequently used functions</li>
                                <li>Waterproof IPX7, fast Type-C charging, 800mAh Lithium Ion battery lasts 25 days</li>
                                <li>Antibacterial Dupont brush head, soft bristles, does not scratch gums</li>
                            </ol>
                        </div>
                        <div>
                            <p>
                                The Halio Sonic SmartClean Electric Toothbrush features a modern design and cleans with Sonic wave technology that is 10 times more effective than a regular toothbrush. This Halio health care device offers 4 cleaning modes: Clean, Soft, Whitening, and Deep Clean, combined with a durable, noise-reducing Maglev motor. The toothbrush is IPX7 waterproof, equipped with an 800mAh Lithium Ion battery, charges in 4 hours, and can be used for up to 25 days.
                            </p>
                        </div>
                        <p className="thanh-tieu-de">Why choose the Halio Sonic SmartClean Electric Toothbrush?</p>
                        <p>
                            The Halio Sonic SmartClean Electric Toothbrush has many impressive features worth investing in for the following reasons:
                        </p>
                        <p>
                            - Integrates 4 cleaning modes suitable for various needs, from gentle cleaning to whitening and caring for sensitive teeth.<br />
                            - Waterproof design with IPX7 rating and durable Maglev motor, reducing noise for safe and comfortable use.<br />
                            - Large 800mAh Lithium Ion battery, requires only 4 hours to charge and can last up to 25 days, saving time and effort.
                        </p>
                        <img className="w-100" src={banChaiMoTa} alt="" />
                        <p className="thanh-tieu-de mt-2">
                            Halio Sonic SmartClean Electric Toothbrush – Effective protection and care solution with advanced features
                        </p>
                        <p>
                            The Halio Sonic SmartClean Electric Toothbrush is becoming the top choice for those who care about oral hygiene. With advanced Sonic wave technology, it not only optimizes cleaning but also effectively prevents harmful dental issues.
                        </p>
                        <p className="thanh-tieu-de">Sonic wave technology, durable design with Maglev motor</p>
                        <p>
                            The Halio Sonic SmartClean Electric Toothbrush impresses with Sonic wave cleaning technology operating at 42,000 vibrations per minute. This technology produces micro-bubbles with strong pressure that remove leftover food particles and plaque in hard-to-reach areas. It not only cleans deeply but also whitens teeth better than regular toothbrushes, giving users a more confident and radiant smile.
                        </p>
                        <img className="w-100" src={banChaiMoTa2} alt="" />
                        <p>
                            The Maglev motor in the Halio Sonic SmartClean is designed for durability, minimizing noise and ensuring stability during use. Especially stable at high vibration intensity, it offers a smooth, long-lasting experience. This allows continuous operation without discomfort, providing comfort for daily oral care.
                        </p>
                        <p className="thanh-tieu-de">
                            Integrated 4 cleaning modes, IPX7 waterproof, with 800mAh battery
                        </p>
                        <p>
                            Customers highly rate the Halio Sonic SmartClean Electric Toothbrush for its 4 operation modes: Clean, Soft, Whitening, and Deep Clean. Each mode is specially designed to fit the user's dental needs and conditions. These modes make the product versatile, meeting all requirements from regular to deep cleaning.
                        </p>
                        <img className="w-100" src={banChaiMota3} alt="" />
                        <p>
                            The Halio Sonic SmartClean has a slip-resistant design and IPX7 waterproof rating, ensuring safety in wet environments. It comes with an 800mAh Lithium Ion battery that only needs 4 hours to fully charge, lasting up to 25 days. The convenient Type-C charger also supports fast charging and adds more convenience in any situation.
                        </p>
                        <p className="thanh-tieu-de">
                            How to use the Halio Sonic SmartClean Electric Toothbrush
                        </p>
                        <p>
                            Using the Halio Sonic SmartClean Electric Toothbrush is simple, just follow these steps:<br />
                            - Step 1: Wet the brush head and apply a small amount of toothpaste, then press and hold the power button for 1-2 seconds to turn it on.<br />
                            - Step 2: Select the desired mode by pressing the power button lightly, gently move the brush over your teeth, and the device will remind you to change zones every 30 seconds.<br />
                            - Step 3: After 2 minutes (or 3 minutes on Deep Clean mode), the device will automatically turn off. Then rinse the brush head, clean it, and store in a dry place.
                        </p>
                        <img className="w-100" src={banChaiMoTa4} alt="" />
                        <p className="thanh-tieu-de">
                            Buy the high-quality Halio Sonic SmartClean Electric Toothbrush now, great price with many offers at CellphoneS
                        </p>
                        <p>
                            The Halio Sonic SmartClean Electric Toothbrush is the ideal companion for your radiant smile. If you want to purchase this electric toothbrush, visit the CellphoneS system to get an authentic product. At CellphoneS, customers are guaranteed good rights and after-sales service, with dedicated support and reasonable prices.
                        </p>

                    </div>
                </div>
                <div className="col-4">
                    <div className="khung-chi-tiet2 mt-4">
                        <p className="fw-semibold p-3">Technical Specifications</p>

                        <div>
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5">Cleaning Technology</p>
                                <p>Sonic</p>
                            </div>
                            <div className="p-2 gap-2 d-flex">
                                <p className="col-5">Modes</p>
                                <p className="col-7">Clean, Whitening, Sensitive, Deep Clean</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5">Vibration Frequency</p>
                                <p>42,000 strokes/min (Sonic)</p>
                            </div>
                            <div className="p-2 gap-2 d-flex">
                                <p className="col-5">Features</p>
                                <p className="col-7">
                                    2-minute brushing timer<br />
                                    30-second interval reminder<br />
                                    Memory for preferred mode<br />
                                    Dupont bristles
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5">Battery Type</p>
                                <p>Lithium-ion battery</p>
                            </div>
                            <div className="p-2 gap-3 d-flex">
                                <p className="col-5">Battery Capacity</p>
                                <p className="col-7">
                                    4-hour charge<br />
                                    25-day use (2 times/day)
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5">Charging Port</p>
                                <p>Type-C</p>
                            </div>
                            <div className="p-2 gap-3 d-flex">
                                <p className="col-5">Water Resistance</p>
                                <p className="col-7">IPX7</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5">Manufacturer</p>
                                <p>Halio</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  
    
        

    </>
}