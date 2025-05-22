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
                                    <div className=" tinh-nang-noi-bat" >
                                        <p className="text-semibold" >TÍNH NĂNG NỔI BẬT</p>
                                    </div>
                                    <div className="chu-trong-khung-ban-chai">
                                        <ul>
                                            <li>Công nghệ sóng âm Sonic 42.000 nhịp/phút, giúp làm sạch hiệu quả hơn</li>
                                            <li>Động cơ Maglev êm ái, 4 chế độ phù hợp mọi nhu cầu</li>
                                            <li>Nhắc nhở chuyển vùng, hẹn giờ 2 phút, ghi nhớ chức năng thường dùng</li>
                                            <li>Chống nước IPX7, sạc nhanh Type-C, pin Lithium Ion 800mAh dùng 25 ngày</li>
                                            <li>Đầu bàn chải Dupont kháng khuẩn, sợi mềm mại, không gây trầy xước nướu</li>
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
                        <img  src={banChaiTrong} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="0" />
                        <img  src={banChai2} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="1" />
                        <img  src={banChai3} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="2" />
                        <img  src={banChai2Doi} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="3" />
                        <img  src={banChai3Doi} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="4" />
                        <img  src={banChai4} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="5" />
                        <img  src={banChai5} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="6" />
                        <img  src={banChai6} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="7" />
                        <img  src={banChai7} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="8" />
                        <img  src={banChai8} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="9" />
                        <img  src={banChai9} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="10" />
                        <img  src={banChai10} width="60" height="60" className="img-thumbnail thumb anh-hover" data-bs-target="#myCarousel" data-bs-slide-to="11" />
                    </div>
                    <div className="row khung-chi-tiet mt-4 w-856 mx-1" >
                        <div className="col-6 " >
                            <p className="thanh-tieu-de mt-2 " >Thông tin sản phẩm</p>
                            <ul className="thong-tin-san-pham" >
                                <li>Mới, đầy đủ phụ kiện từ nhà sản xuất</li>
                                <li>1 x Thân bàn chải, 1 x Đầu bàn chải, 1 x Dây sạc USB-C, 1 x Hướng dẫn sử dụng</li>
                                <li>Bảo hành chính hãng 12 tháng tại trung tâm bảo hành ủy quyền, 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ NSX. </li>
                                <li>Giá sản phẩm đã bao gồm VAT</li>
                            </ul>

                        </div>
                        <div className="col-6" >
                            <p className="thanh-tieu-de mt-2 mx-3" >công nghệ tiên tiến</p>
                            <ul className="thong-tin-san-pham" >
                                <li><p>Công nghệ song âm Sonic</p> làm sạch thức ăn thừa ở các vị trí khó nhất</li>
                                <li><p >Động cơ Maglev có độ bền cao</p> giảm tiếng ồn, hoạt động hiểu quả</li>
                                <li><p>5 chế độ chăm sóc răng miệng</p>đáp ứng nhiều nhu cầu sử dụng</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-4 mx-" >
                    <div className="d-flex gap-2 " >
                        <p className="gia-giam" >379.000đ</p>
                        <p className="gia-goc" >900.000đ</p>
                    </div>
                    <p className="fw-bolder" >Chọn màu để xem giá và chi nhánh có hàng</p>
                    <div className="d-flex gap-3" >
                        <div className=" d-flex khung-xanh-duong " data-bs-target="#myCarousel" data-bs-slide-to="1" >
                            <img src={banChai2} width="60" height="60" data-bs-target="#myCarousel" data-bs-slide-to="1" />
                            <div>
                                <p className="xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="1">Xanh dương</p>
                                <p className="gia-xanh-duong" >379.000đ</p>
                            </div>

                        </div>
                        <div className=" d-flex khung-xanh-duong " data-bs-target="#myCarousel" data-bs-slide-to="2" >
                            <img src={banChai3} width="60" height="60" data-bs-target="#myCarousel" data-bs-slide-to="2" />
                            <div>
                                <p className="xanh-duong" data-bs-target="#myCarousel" data-bs-slide-to="2">Hồng</p>
                                <p className="gia-xanh-duong" >379.000đ</p>
                            </div>

                        </div>


                    </div>
                    <div className=" mt-3" >
                        <div className="  d-flex gap-3 align-items-center" >
                            <div className="bg-mua-ngay text-white p-2">
                                <p className="text-center">MUA NGAY </p>
                                <p >(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</p>
                            </div>
                            <img className="gio-hang" src={gioHang} alt="" />

                        </div>
                        <div className="bg-tra-gop text-center p-2 mt-3" >
                            <p>TRẢ GÓP 0%</p>
                            <p>Trả trước chỉ từ 37.900đ</p>
                        </div>
                        <div className="mt-3 boder-khung-uu-dai mb-3" >
                            <p className="fw-semibold bg-uu-dai-them">ƯU ĐÃI THÊM</p>
                            <ul>
                                <li>Xem chính sách ưu đãi dành cho thành viên Smember</li>
                                <li> Hoàn tiền đến 2 triệu khi mở thẻ tín dụng HSBC</li>
                                <li>Giảm đến 1 triệu khi thanh toán qua thẻ Muadee by HDBank</li>
                                <li> Giảm 400.000đ khi thanh toán bằng thẻ tín dụng Home Credit</li>
                                <li>Kredivo Giảm đến 500.000đ khi thanh toán qua Kredivo</li>
                                <li> Giảm 200K khi trả góp bằng thẻ Visa Sacombank qua MPOS</li>
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
                        <div className="dac-diem-noi-bat bg-khung-noi-bat p-2 " >
                            <p className="fw-bold text-danger text-center" >Đặc điểm nổi bật</p>
                            <ol className="">
                                <li>Công nghệ sóng âm Sonic 42.000 nhịp/phút, giúp làm sạch hiệu quả hơn</li>
                                <li>Động cơ Maglev êm ái, 4 chế độ phù hợp mọi nhu cầu</li>
                                <li>Nhắc nhở chuyển vùng, hẹn giờ 2 phút, ghi nhớ chức năng thường dùng</li>
                                <li>Chống nước IPX7, sạc nhanh Type-C, pin Lithium Ion 800mAh dùng 25 ngày</li>
                                <li>Đầu bàn chải Dupont kháng khuẩn, sợi mềm mại, không gây trầy xước nướu</li>
                            </ol>
                        </div>
                        <div>
                            <p>
                                Bàn chải điện Halio Sonic SmartClean Electric Toothbrush có ngoại hình hiện đại, làm sạch với sóng âm Sonic cho hiệu quả gấp 10 lần bàn chải thường. Món thiết bị chăm sóc sức khoẻ Halio này có 4 chế độ làm sạch Clean, Soft, Whitening và Deep Clean cùng động cơ Maglev bền bỉ, giảm tiếng ồn. Bàn chải có kháng nước đạt IPX7, pin Lithium Ion dung lượng 800mAh, sạc 4 giờ, dùng đến 25 ngày.
                            </p>
                        </div>
                        <p className="thanh-tieu-de" >Vì sao nên mua bàn chải điện Halio Sonic SmartClean Electric Toothbrush?</p>
                        <p>
                            Bàn chải điện Halio Sonic SmartClean Electric Toothbrush sở hữu nhiều điểm ấn tượng, đáng đầu tư bởi các lý do sau:
                        </p>
                        <p> - Tích hợp 4 chế độ làm sạch phù hợp với nhiều nhu cầu sử dụng, từ làm sạch nhẹ nhàng đến làm trắng răng và chăm sóc răng nhạy cảm <br />

                            - Thiết kế kháng nước chuẩn IPX7 và động cơ Maglev bền bỉ, giảm tiếng ồn, đảm bảo an toàn và thoải mái khi sử dụng <br />
                            - Pin Lithium Ion dung lượng lớn 800mAh, chỉ cần sạc 4 giờ và sử dụng tối đa đến 25 ngày, giúp tiết kiệm thời gian và công sức
                        </p>
                        <img className="w-100" src={banChaiMoTa} alt="" />
                        <p className="thanh-tieu-de mt-2" >Bàn chải điện Halio Sonic SmartClean Electric Toothbrush - Giải pháp bảo vệ, chăm sóc hiệu quả với nhiều tính năng tân tiến</p>
                        <p className="">
                            Bàn chải điện Halio Sonic SmartClean Electric Toothbrush đang trở thành lựa chọn hàng đầu cho những ai quan tâm đến việc chăm sóc răng miệng. Với công nghệ sóng âm Sonic tiên tiến, sản phẩm không những giúp làm sạch cách tối ưu mà còn ngăn ngừa hiệu quả các vấn đề có hại về răng.
                        </p>
                        <p className="thanh-tieu-de" >Công nghệ sóng âm Sonic, thiết kế bền bỉ với động cơ Maglev </p>
                        <p>Bàn chải điện Halio Sonic SmartClean Electric Toothbrush gây ấn tượng với tính năng làm sạch bằng sóng âm Sonic, tần số lên tới 42.000 nhịp/phút. Công nghệ này tạo ra những bọt khí li ti với áp lực lớn giúp loại bỏ vụn thức ăn thừa, mảng bám ở cả vị trí khó tiếp cận. Máy không chỉ làm sạch sâu mà còn giúp răng trắng sáng hơn so với bàn chải thông thường, giúp khách hàng tự tin hơn với nụ cười rạng rỡ.</p>
                        <img className="w-100" src={banChaiMoTa2} alt="" />
                        <p>
                            Động cơ Maglev trong Halio Sonic SmartClean được thiết kế bền bỉ, giúp giảm thiểu tiếng ồn và đảm bảo sự ổn định khi sử dụng. Đặc biệt là sự ổn định khi bàn chải rung ở cường độ cao, mang đến trải nghiệm sử dụng mượt mà, bền bỉ vượt thời gian. Với điều này, bàn chải có thể hoạt động liên tục mà không gây cảm giác khó chịu, tạo sự thoải mái trong việc chăm sóc răng miệng hằng ngày.
                        </p>
                        <p className="thanh-tieu-de" >
                            Tích hợp 4 chế độ làm sạch, kháng nước IPX7 với pin 800mAh
                        </p>
                        <p>
                            Bàn chải điện Halio Sonic SmartClean Electric Toothbrush được khách hàng đánh giá rất cao bởi 4 chế độ hoạt động: Clean, Soft, Whitening và Deep Clean. Mỗi chế độ hoạt động của bàn chải được thiết kế đặc biệt để phù hợp với nhu cầu và tình trạng răng miệng của từng người dùng. Các chế độ này giúp sản phẩm trở nên linh hoạt, có thể đáp ứng mọi yêu cầu từ làm sạch thông thường đến làm sạch chuyên sâu.
                        </p>
                        <img className="w-100" src={banChaiMota3} alt="" />
                        <p>
                            Halio Sonic SmartClean có thiết kế ngăn trượt, ngăn thấm nước đạt chuẩn IPX7, đảm bảo an toàn khi sử dụng trong môi trường ẩm ướt. Sản phẩm còn đi kèm với pin Lithium Ion dung lượng 800mAh, chỉ cần sạc trong 4 giờ là có thể sử dụng lên đến 25 ngày. Đầu sạc Type-C tiện dụng cũng góp phần hỗ trợ sạc nhanh và đem đến nhiều tiện lợi hơn trong mọi tình huống.
                        </p>
                        <p className="thanh-tieu-de" >
                            Hướng dẫn sử dụng bàn chải điện Halio Sonic SmartClean Electric Toothbrush
                        </p>
                        <p>
                            Cách sử dụng bàn chải điện Halio Sonic SmartClean Electric Toothbrush rất đơn giản, người dùng chỉ cần tuân theo một vài bước như sau: <br />

                            - Bước 1: Làm ướt đầu bàn chải và cho lượng nhỏ kem đánh răng lên đầu lông chải, tiếp đến nhấn giữ nút nguồn khoảng 1-2 giây để bật máy <br />

                            - Bước 2: Chọn chế độ phù hợp bằng cách nhấn nhẹ nút nguồn, di chuyển bàn chải nhẹ nhàng qua các vùng răng, mỗi 30 giây máy sẽ nhắc nhở chuyển vùng <br />

                            - Bước 3: Sau 2 phút (hoặc 3 phút với chế độ Deep Clean), máy sẽ tự động tắt, sau đó rửa sạch đầu bàn chải và vệ sinh, để nơi khô rá
                        </p>
                        <img className="w-100" src={banChaiMoTa4} alt="" />
                        <p className="thanh-tieu-de" >
                            Mua ngay bàn chải điện Halio Sonic SmartClean Electric Toothbrush chất lượng cao, giá tốt với hàng loạt ưu đãi tại CellphoneS
                        </p>
                        <p>
                            Bàn chải điện Halio Sonic SmartClean Electric Toothbrush xứng đáng là người bạn đồng hành lý tưởng cho nụ cười rạng rỡ của khách hàng. Nếu có nhu cầu tìm mua chiếc bàn chải điện này, hãy đến ngay hệ thống CellphoneS để được rước về tay sản phẩm chính hãng. Tại CellphoneS, khách hàng sẽ được đảm bảo về các quyền lợi, chế độ hậu mãi tốt, hỗ trợ tận tâm với chi phí mua sắm phải chăng.
                        </p>

                    </div>
                </div>
                <div className="col-4 " >
                    <div className="khung-chi-tiet2 mt-4 ">
                        <p className="fw-semibold p-3" >Thông số kỹ thuật</p>
                        <div className="" >
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5" >Công nghệ làm sạch </p>
                                <p>Sóng âm (Sonic)</p>
                            </div>
                            <div className="p-2 gap-2 d-flex  ">
                                <p className="col-5">Chế độ</p>
                                <p className="col-7">Làm sạch, Làm trắng, Răng nhạy cảm, Làm sạch sâu</p>
                            </div>

                        </div>
                        <div className="" >
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5" >Tần số rung </p>
                                <p>42.000 nhịp/phút (Sonic)</p>
                            </div>
                            <div className="p-2 gap-2 d-flex  ">
                                <p className="col-5">Tiện ích</p>
                                <p className="col-7">
                                    Hẹn giờ chải răng 2 phút
                                    Chức năng nhắc nhở 30 giây/lần
                                    Ghi nhớ chức năng thường dùng
                                    Lông bàn chải bằng sợi Dupont
                                </p>
                            </div>

                        </div>
                        <div className="" >
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5" >Loại pin </p>
                                <p>Pin Lithium-ion</p>
                            </div>
                            <div className="p-2 gap-3 d-flex  ">
                                <p className="col-5">Dung lượng pin</p>
                                <p className="col-7">Sạc 4 giờ
                                    Sử dụng 25 ngày (2 lần/ngày)
                                </p>
                            </div>

                        </div>
                        <div className="" >
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5" >Cổng sạc</p>
                                <p>Type-C</p>
                            </div>
                            <div className="p-2 gap-3 d-flex  ">
                                <p className="col-5">Chống nước</p>
                                <p className="col-7">
                                    IPX7
                                </p>
                            </div>

                        </div>
                        <div className="" >
                            <div className="bg-thong-so-ky-thuat d-flex gap-3 hustify-content-center p-2">
                                <p className="col-5" >Hãng sản xuất</p>
                                <p>Halio</p>
                            </div>
                        

                        </div>
                       


                    </div>
                </div>
            </div>
        </div>
    </>
}