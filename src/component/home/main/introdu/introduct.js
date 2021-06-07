import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Container, Form,FormGroup,Input, Row } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
function Introduce() {
    const location= useLocation();
    const [_firstName,_setFirstName] = useState('');
    const [_lastName,_setLastName] = useState('');
    const [_mail,_setEmail] = useState('');
    const [_phone,_setPhone] = useState('');
    const { t} = useTranslation('home');
    return (
        <div className="introduce" data-aos="fade-up">
            <div className="text-introduce"><div className="text-introduce-1">
                <div>
                    <h3>Về SPEAK ENGLISH</h3>
                    <p>SPEAK ENGLISH là Trung tâm Anh ngữ đầu tiên trở thành đối tác chính thức của Hội đồng 
                        Học thuật Windsor Essex, bang Ontario, Canada. Chúng tôi tự hào mang đến những 
                        khóa học tiếng Anh dựa trên chương trình giảng dạy của Ontario, Canada; phương 
                        pháp giảng dạy dựa trên nhu cầu thực tế, với nền tảng là những nghiên cứu và phát 
                        triển mới nhất trong giáo dục hiện đại. </p><br/>
                    <p>Với mục đích giúp học viên Việt Nam tiếp cận với các phương pháp dạy và học tiếng Anh 
                        tiên tiến. Chúng tôi chú trọng việc hướng dẫn học sinh trong quá trình học, điều 
                        này vừa mang lại niềm vui vừa giúp học viên dễ dàng tiếp thu kiến thức một cách nhanh 
                        chóng và hiệu quả hơn.</p><br/>
                    <p>Các chương trình SPEAK ENGLISH được thiết kế giúp cho khả năng ngôn ngữ của học viên phát triển 
                        tự nhiên, tự tin khám phá, phát triển khả năng của bản thân.</p><br/>
                    <p>Bên cạnh đó, với chương trình học theo phương pháp giáo dục của Canada sẽ trang bị cho 
                        học viên những kỹ năng học tập cần thiết để thành công, không chỉ trong việc học tiếng 
                        Anh, mà còn trong các lĩnh vực khác trong cuộc sống.</p>
                </div>
            </div></div>
            <div className="img-intro">
            </div>
        </div>
    );
}

export default withTranslation('home')(Introduce);
