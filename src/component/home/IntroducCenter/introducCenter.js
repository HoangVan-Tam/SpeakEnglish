import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, {
    Autoplay
} from 'swiper/core';
  
import Employ from "../course/employy/employee";
function IntroducCenter() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <div className="introduce1" data-aos="fade-up">
                <div className="text-introduce1"><div className="text-introduce-11">
                    <div>
                        <h3>CHƯƠNG TRÌNH ONTARIO</h3>
                        <p>Chương trình Ontario là một chương trình giảng dạy toàn diện, 
                            được sử dụng các phương pháp giảng dạy hiện đại theo yêu cầu 
                            dựa trên công trình nghiên cứu toàn diện phát triển tiềm năng 
                            của tất cả học viên. Chương trình này được thiết kế nhằm đảm 
                            bảo cho học viên có đầy đủ kiến thức, kỹ năng và phát huy giá 
                            trị tư duy trong việc sử dụng thành công của ngôn ngữ.
                        </p><br/>
                        <p>Chương trình Ontario thúc đẩy việc phát triển kỹ năng ngôn ngữ 
                            trong tích hợp các môn học khác. Qua đó, SPEAK ENGLISH triển khai bổ 
                            trợ chương trình Toán học và Khoa học để nâng cao kiến thức 
                            của học viên, không đơn thuần về tiếng Anh mà còn về thế giới 
                            quan trong cuộc sống.
                        </p>
                    </div>
                    <div className="img-intro1">
                        <img src={require("../../../assets/img/ct-daotao.jpg").default} alt='...'></img>
                    </div>
                </div></div>
                
            </div>
            <div className="introduce2" data-aos="fade-up">
                <div className="text-introduce2">
                    <h3>PHƯƠNG PHÁP HỌC TIÊN TIẾN VÀ HIỆU QUẢ</h3>
                    <div className="text-introduce-12">
                
                    <div className="img-intro2">
                        <Swiper  className="mySwiper" autoplay={{
                                "delay": 2000,
                                "disableOnInteraction": false
                        }}>
                            <SwiperSlide><img src={require("../../../assets/img/method1.jpg").default} alt='...'></img></SwiperSlide>
                            <SwiperSlide><img src={require("../../../assets/img/method2.jpg").default} alt='...'></img></SwiperSlide>
                            <SwiperSlide><img src={require("../../../assets/img/method3.jpg").default} alt='...'></img></SwiperSlide>
                        </Swiper>
                        
                    </div>
                    <div>
                        <p>Phương pháp học tập tại SPEAK ENGLISH là giảm áp lực học tập để thúc đẩy 
                            khả năng tiếp thu kiến thức tốt hơn. Để trở thành một học sinh 
                            thành công trong thế kỷ 21, yêu cầu mỗi học sinh phải có kiến 
                            thức nền tảng về STEM (Science, Technology, Engineering, Mathematics). 
                            Đó là lý do vì sao SPEAK ENGLISH tích hợp giảng dạy tiếng Anh về Khoa học 
                            và Toán trong chương trình của mình, cung cấp cho học sinh nền 
                            tảng kiến thức vững chắc cho việc học sau này tại các quốc gia 
                            nói tiếng Anh như Canada, Úc, Anh và Mỹ.
                        </p><br/>
                        <p>Các tiếp cận của SPEAK ENGLISH trong việc đánh giá và kiểm tra cũng có 
                            nhiều điểm khác biệt. Chúng tôi tiếp cận việc đánh giá như một 
                            yêu cầu liên tục để có thể xác định điểm mạnh và điểm yếu của 
                            học sinh từng giai đoạn, từ đó chúng tôi có thể điều chỉnh việc 
                            dạy và học để tối đa hóa sự phát triển học tập của học sinh. 
                            Chúng tôi quan niệm rằng nếu có quá nhiều bài kiểm tra sẽ 
                            lấy đi thời gian học tập và gây ra áp lực cho học sinh. Do 
                            đó, bằng hình thức kiểm tra đúng cách và đúng lộ trình thông 
                            qua việc kết hợp với phương pháp đánh giá liên tục, học sinh 
                            sẽ học nhanh và hiệu quả hơn..
                        </p>
                    </div>
                </div></div>
            </div>
            <Employ/>
        </>
    );
}

export default IntroducCenter;