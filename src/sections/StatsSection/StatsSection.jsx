// File: src/sections/StatsSection/StatsSection.jsx
import './StatsSection.css';
export const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-section__container">
       
        {/* === CỘT TRÁI (NỀN ĐỎ) === */}
        <div className="stats-section__left">
          <h2 className="stats-section__title">
            Tại Sao <br />
            <span>&gt;&gt; CHỌN HỌC BÁ &lt;&lt;</span>
          </h2>
          <div className="stats-section__divider"></div>
          <p className="stats-section__subtitle">
            Hơn <span className="stats-section__highlight">5000</span> Câu Chuyện Học Viên Xuất Sắc<br/>
            Trở Thành Niềm Tự Hào Lớn Nhất Của Chúng Tôi
          </p>
        </div>
       
        {/* === CỘT PHẢI (NỀN TRẮNG) === */}
        <div className="stats-section__right">
          <div className="stats-section__grid">
           
            {/* Stat 1 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">5.000+</div>
              <div className="stats-section__item-text">Học Viên Đã Tốt Nghiệp</div>
            </div>
           
            {/* Stat 2 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">100+</div>
              <div className="stats-section__item-text">Giảng Viên Tài Năng</div>
            </div>
           
            {/* Stat 3 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">100%</div>
                 <div className="stats-section__item-text">Học Viên Đạt<br/> Chuẩn Đầu Ra</div>
            </div>
           
            {/* Stat 4 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">557+</div>
              <div className="stats-section__item-text">Học Viên Đã<br/> Du Học Thành Công</div>
            </div>
           
            {/* Stat 5 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">1.537+</div>
              <div className="stats-section__item-text">Bài Viết Học Thuật</div>
            </div>
           
            {/* Stat 6 */}
            <div className="stats-section__item">
              <div className="stats-section__item-number">20+</div>
              <div className="stats-section__item-text">Đầu Sách Nội Bộ</div>
            </div>
           
          </div>
        </div>
      </div>
     
      {/* === 3 DẤU CHẤM TRÒN === */}
      <div className="stats-section__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};