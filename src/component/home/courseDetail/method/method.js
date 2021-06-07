import React from 'react';
import { ImBooks } from "react-icons/im";
import { GiBrain,GiTeamIdea } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
function Method() {
    return (
        <div className="method">
            <div className="method-title">
                <h2>Phương pháp dạy và học</h2>
                <p>
                    Phương pháp giảng dạy chất lượng là chìa khóa giúp sinh viên thành công trong việc 
                    thành thạo các kỹ năng ngôn ngữ. Đó là lý do tại sao Chương trình giảng dạy Ontario 
                    sử dụng các phương pháp giảng dạy hiện đại dựa trên sự kết hợp giữa học thuật và thực 
                    hành trên lớp học. Việc này hình thành sự tin tưởng tất cả các sinh viên đều có thể là 
                    người học ngôn ngữ thành công. Chương trình giảng dạy này cung cấp nhiều cơ hội cho sinh 
                    viên thực hành và áp dụng kiến thức, kỹ năng tích lũy được trong học tập và cuộc sống của họ.
                </p>
            </div>
            <div className="method-step">
                <div className="method-step-child">
                    <span>1</span>
                    <div className="method-step-child-content">
                        <h5>Học tập dựa trên yêu cầu</h5>
                        <p>
                            Tìm hiểu là cốt lõi của việc học và học sinh được khuyến khích từ khi còn rất nhỏ để 
                            phát triển khả năng đặt câu hỏi và tìm ra được nhiều đáp án cho các câu hỏi. Từ đó, 
                            học viên có được các kỹ năng tự mình tiếp cận các thông tin liên quan để có thể giải 
                            đáp các câu hỏi của mình.
                        </p>
                    </div>
                </div>
                <div className="method-step-child">
                    <span>2</span>
                    <div className="method-step-child-content">
                        <h5>Sự liên kết trong các kỹ năng</h5>
                        <p>
                            Nghe, nói, đọc và viết, được hướng dẫn là quá trình liên kết với nhau chúng không thể tách 
                            rời mà còn hỗ trợ và tương trợ lẫn nhau. Các nhà nghiên cứu giáo dục đã đưa ra mô hình giảng 
                            dạy hiện đại giúp cho học viên thiết lập những kỹ năng độc lập cần thiết cho việc học tập 
                            và cuộc sống.
                        </p>
                    </div>
                </div>
                <div className="method-step-child">
                    <span>3</span>
                    <div className="method-step-child-content">
                        <h5>Học tập thông qua quan sát</h5>
                        <p>
                            Mỗi học viên đều nhận biết rõ mục đích học tập của mình, điều này giúp học sinh khám 
                            phá những kiến thức đã học. Khung chương trình chuẩn cùng với hướng dẫn riêng biệt cho 
                            từng học viên thông qua phương pháp giảng dạy; mỗi học viên sẽ được trao đổi thông qua 
                            kỹ năng tư duy giúp cho học viên tự xác định cho mình phương pháp học phù hợp nhất.
                        </p>
                    </div>
                </div>
                <div className="method-step-child">
                    <span>4</span>
                    <div className="method-step-child-content">
                        <h5>Đánh giá trong học tập</h5>
                        <p>
                            Mục đích chính của việc đánh giá là giúp cho học viên cải thiện việc học của mình. Và kết quả 
                            sẽ không có giá trị nếu việc đánh giá không phản ánh được suốt quá trình dạy và học. Điều này 
                            có nghĩa đánh giá là một quá trình liên tục, không cần nhiều bài kiểm tra gây áp lực cho học 
                            viên.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ads-CourseDetail">
                    <div><FcIdea/><p>Phương pháp giảng dạy</p></div>
                    <div><ImBooks/><p>Nội dung giảng dạy</p></div>
                    <div><GiTeamIdea/><p>Đội ngũ giáo viên</p></div>
                    <div><GiBrain/><p>Con đường đi du học</p></div>
            </div>
        </div>
    );
}

export default Method;