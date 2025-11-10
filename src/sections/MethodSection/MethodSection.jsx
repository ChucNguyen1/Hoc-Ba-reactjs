import './MethodSection.css';
import { FaCircle } from 'react-icons/fa';
import { GrTopCorner, GrBottomCorner } from "react-icons/gr";
export const MethodSection = () => {
  return (
    <section className="method-section">
      <div className="method-section__container">
       
        {/* === PHẦN HEADING (TIÊU ĐỀ) === */}
        <div className="method-section__heading">
          <h2 className="method-section__title">
            <span className="method-section__corner method-section__corner--tl">
              <GrTopCorner />
            </span>
            <u>PHƯƠNG PHÁP HIỆU QUẢ</u>
            <span className="method-section__corner method-section__corner--tr">
              <GrTopCorner  />
            </span>
            <span className="method-section__corner method-section__corner--bl">
              <GrBottomCorner />
            </span>
            <span className="method-section__corner method-section__corner--br">
              <GrBottomCorner  />
            </span>
          </h2>
          <p className="method-section__sub-heading">
            Từ Các Trường Đại Học Uy Tín Thế Giới
          </p>
          <p className="method-section__tagline">
            Trực Tuyến Hóa Chương Trình Học Với Hiệu Quả Vượt Trội
          </p>
        </div>
        {/* === PHẦN NỘI DUNG (3 CỘT) === */}
        <div className="method-section__grid">
         
          {/* --- Cột 1 --- */}
          <div className="method-section__column">
            <div className="method-section__column-border">
              <div className="method-section__card">
                <h3>ACTIVE E-LEARNING</h3>
                <div className="method-section__card-tag">Học Chủ Động, Giao Tiếp Vượt Trội</div>
                <ul className="method-section__card-list">
                  <li><FaCircle /> Thực Hành, Tranh Luận Bằng Tiếng Trung, Xử Lý Tình Huống Thực Tế.</li>
                  <li><FaCircle /> Nâng Cao Khả Năng Giao Tiếp, Ghi Nhớ Từ Vựng Bền Vững.</li>
                  <li><FaCircle /> Sử Dụng Ngữ Pháp Sắc Bén, Vượt Trội So Với Lối Học Thụ Động.</li>
                </ul>
              </div>
            </div>
          </div>
         
          {/* --- Cột 2 --- */}
          <div className="method-section__column">
            <div className="method-section__column-border">
              <div className="method-section__card">
                <h3>VISUAL E-LEARNING</h3>
                <div className="method-section__card-tag">Học Qua Hình Ảnh, Ghi Nhớ Sâu</div>
                <ul className="method-section__card-list">
                  <li><FaCircle /> Ứng Dụng Flashcards, Sơ Đồ Tư Duy, Video Sinh Động.</li>
                  <li><FaCircle /> Nắm Vững Từ Vựng, Ký Tự Tiếng Trung Nhanh Chóng.</li>
                  <li><FaCircle /> Cải Thiện Phát Âm, Ngữ Điệu, Tăng Hiệu Quả So Với Cách Học Truyền Thống.</li>
                </ul>
              </div>
            </div>
          </div>
         
          {/* --- Cột 3 --- */}
          <div className="method-section__column">
            <div className="method-section__column-border">
              <div className="method-section__card">
                <h3>PROJECT E-BASED LEARNING</h3>
                <div className="method-section__card-tag">Học Qua Dự Án, Ứng Dụng Thực Tiễn</div>
                <ul className="method-section__card-list">
                  <li><FaCircle /> Thực Hành Nghe - Nói - Đọc - Viết - Dịch Qua Dự Án Thực Tế.</li>
                  <li><FaCircle /> Hoạt Động: Làm Video, Dịch Tài Liệu, Thuyết Trình Nhóm.</li>
                  <li><FaCircle /> Phát Triển Tư Duy Phản Biện, Giao Tiếp Lưu Loát, Làm Chủ Tiếng Trung Trong Mọi Tình Huống.</li>
                </ul>
              </div>
            </div>
          </div>
       
        </div> 
       
        {/* === PHẦN ĐÁNH SỐ (3 CỘT) === */}
        <div className="method-section__numbering">
          <div className="method-section__number-circle">
            <span>1</span>
          </div>
          <div className="method-section__number-circle">
            <span>2</span>
          </div>
          <div className="method-section__number-circle">
            <span>3</span>
          </div>
        </div>
      </div> 
    </section>
  );
};