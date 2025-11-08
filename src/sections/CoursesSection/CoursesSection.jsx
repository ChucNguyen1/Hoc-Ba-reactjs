// File: src/sections/CoursesSection/CoursesSection.jsx

import './CoursesSection.css';
// [SỬA] Import icon sếp yêu cầu
import { IoIosArrowRoundForward } from "react-icons/io";

export const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-section__container">
        
        <div className="courses-section__grid">

          {/* === CARD 1: HSK === */}
          <div className="course-card">
            {/* Viền Gradient */}
            <div className="course-card__border"></div>
            
            {/* Nền Trắng + Nội dung */}
            <div className="course-card__content">
              <div className="course-card__icon">
                <img src="/public/HSK.png" alt="Luyện Thi HSK" />
              </div>
              <h3 className="course-card__title">LUYỆN THI HSK</h3>
              <p className="course-card__description">
                Chương Trình Thiết Kế Cho HSK 9 Cấp, Luyện Thi Bản Bản Tả HSKH-HSKK Ôn Luyện Cùng Giảng Viên Giàu Kinh Nghiệm. Cam Kết Đầu Ra, Đảm Bảo Cù Thi Là Đỗ!
              </p>
            </div>
            
            {/* Nút */}
            <div className='course-card__button-wrapper'>
              <a href="#" className="course-card__button">
                <IoIosArrowRoundForward className="course-card__button-icon" />
             </a>
            </div>
          </div>

          {/* === CARD 2: ỨNG DỤNG === */}
          <div className="course-card">
            <div className="course-card__border"></div>
            <div className="course-card__content">
              <div className="course-card__icon">
                <img src="/public/TiengTrung.png" alt="Tiếng Trung Ứng Dụng" />
              </div>
              <h3 className="course-card__title">TIẾNG TRUNG ỨNG DỤNG</h3>
              <p className="course-card__description">
                Lộ Trình Học Thiết Kế Cá Nhân Hóa Dành Riêng Cho Người Đi Làm Tập Trung Phát Triển Toàn Diện 4 Kỹ Năng: Nghe, Nói, Đọc, Viết...
              </p>
            </div>
            <div className='course-card__button-wrapper'>
              <a href="#" className="course-card__button">
                <IoIosArrowRoundForward className="course-card__button-icon" />
             </a>
            </div>
          </div>

          {/* === CARD 3: TOCFL (Active) === */}
          <div className="course-card course-card--active"> 
            <div className="course-card__border"></div>
            <div className="course-card__content">
              <div className="course-card__icon">
                <img src="/public/TOEIC.png" alt="Luyện Thi TOCFL" />
              </div>
              <h3 className="course-card__title">LUYỆN THI TOCFL</h3>
              <p className="course-card__description">
                Chương Trình Thiết Kế Chuyên Sâu Bài Bản Từ A1 - C2, Ôn Luyện Toàn Diện 2 Kỹ Năng Nghe & Đọc Cùng Giảng Viên Giàu Kinh Nghiệm...
              </p>
            </div>
            <div className='course-card__button-wrapper'>
              <a href="#" className="course-card__button">
                <IoIosArrowRoundForward className="course-card__button-icon" />
             </a>
            </div>
          </div>

          {/* === CARD 4: ĐẠI HỌC === */}
          <div className="course-card">
            <div className="course-card__border"></div>
            <div className="course-card__content">
              <div className="course-card__icon">
                <img src="/public/logo.png" alt="Luyện Thi Đại Học" />
              </div>
              <h3 className="course-card__title">LUYỆN THI ĐẠI HỌC</h3>
              <p className="course-card__description">
                Học Đúng Trọng Tâm, Chương Trình Luyện Thi Chuyên Sâu, Bám Sát Cấu Trúc Đề Thi Đại Học (Gaokao/Môn Tiếng Trung)...
              </p>
            </div>
            <div className='course-card__button-wrapper'>
              <a href="#" className="course-card__button">
                <IoIosArrowRoundForward className="course-card__button-icon" />
             </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};