// File: src/sections/SuccessIntroSection/SuccessIntroSection.jsx
import './SuccessIntroSection.css';
import { FaCheck } from 'react-icons/fa';
// Giả định tên file ảnh trong /public/
import decorBookHat from '/book-hat.png';
import personLaptop from '/success-laptop.png';
import decorPage from '/success-book.png';
export const SuccessIntroSection = () => {
  return (
    <section className="success-intro-section">
      <div className="success-intro-section__container">
       
        {/* === PHẦN HEADING (NẰM TRÊN CÙNG) === */}
        <h2 className="success-intro-section__title">
          TIẾNG TRUNG KHÔNG CHỈ LÀ NGÔN NGỮ <br/>
          MÀ CÒN LÀ CÁNH CỬA DẪN ĐẾN THÀNH CÔNG
        </h2>
        {/* === CONTAINER MỚI CHO 2 CỘT === */}
        <div className="success-intro-section__columns">
       
          {/* === CỘT BÊN TRÁI (NỘI DUNG) === */}
          <div className="success-intro-section__content">
           
            {/* Icon trang trí: Sách + Mũ */}
            <img
              src={decorBookHat}
              alt="Trang trí"
              className="success-intro-section__decor-book"
            />
           
            {/* (Heading đã bị kéo lên trên) */}
           
            {/* Danh sách lợi ích */}
            <div className="success-intro-section__benefits-list">
              <div className="success-intro-section__benefit-item">
                <div className='success-intro-section__benefit-icon-wrapper'>
                  <FaCheck className="success-intro-section__benefit-icon" />
                </div>
                <span>Cơ Hội Việc Làm Rộng Mở</span>
              </div>
              <div className="success-intro-section__benefit-item">
                <div className='success-intro-section__benefit-icon-wrapper'>
                  <FaCheck className="success-intro-section__benefit-icon" />
                </div>
                <span>Bứt Phá Thu Nhập Khủng</span>
              </div>
              <div className="success-intro-section__benefit-item">
                <div className='success-intro-section__benefit-icon-wrapper'>
                  <FaCheck className="success-intro-section__benefit-icon" />
                </div>
                <span>Mở Rộng Cơ Hội Du Học & Định Cư</span>
              </div>
              <div className="success-intro-section__benefit-item">
                <div className='success-intro-section__benefit-icon-wrapper'>
                  <FaCheck className="success-intro-section__benefit-icon" />
                </div>
                <span>Khám Phá Văn Hóa & Du Lịch</span>
              </div>
            </div>
          </div>
         
          {/* === CỘT BÊN PHẢI (HÌNH ẢNH) === */}
          <div className="success-intro-section__image-wrapper">
           
            {/* Hình 3D người + laptop */}
            <img
              src={personLaptop}
              alt="Tiếng Trung dẫn đến thành công"
              className="success-intro-section__main-image"
            />
           
            {/* Icon trang trí: Quyển sách */}
            <img
              src={decorPage}
              alt="Trang trí"
              className="success-intro-section__decor-page"
            />
          </div>
        </div> {/* End: __columns */}
      </div> {/* End: __container */}
    </section>
  );
};