import './QualitySection.css';
import laptop from '/quatitylaptop.png'; 
import girl from '/QualityGirl.png'; 
import decorTarget from '/qualityArrow.png'; 
export const QualitySection = () => {
  return (
    <section className="quality-section">
      <div className="quality-section__container">
       
        {/* === CỘT BÊN TRÁI (NỘI DUNG) === */}
        <div className="quality-section__content">
          <h2 className="quality-section__title">
            LẤY CHẤT LƯỢNG ĐÀO TẠO <br />
            <span>LÀM GIÁ TRỊ GIÁO DỤC CỐT LÕI</span>
          </h2>
          <p className="quality-section__tagline">
            CAM KẾT 100% ĐẦU RA - LỘ TRÌNH CÁ NHÂN HÓA
          </p>
          
          <div className="quality-section__features-list">

            <div className="quality-section__feature-item">
              <span className="quality-section__quote-icon">“</span>
              <div className="quality-section__feature-text">
                <h3>CÁ NHÂN HÓA HỌC TẬP</h3>
                <p>Lộ trình học tập phù hợp với từng học viên, Học Bá HSK đặt người học làm trọng tâm, luôn theo sát học viên, hiểu rõ điểm mạnh, yếu để xây dựng lộ trình học tập phù hợp.</p>
              </div>
            </div>
           
            {/* Thẻ 2 */}
            <div className="quality-section__feature-item">
              <span className="quality-section__quote-icon">“</span>
              <div className="quality-section__feature-text">
                <h3>BỐI CẢNH HÓA KIẾN THỨC</h3>
                <p>Chìa khóa kiến thức tới mỗi giai đoạn học tập. Giúp người học viên tiếp cận kiến thức cốt lõi, tập trung vào việc vận dụng kiến thức vào thực tế.</p>
              </div>
            </div>
           
            {/* Thẻ 3 */}
            <div className="quality-section__feature-item">
              <span className="quality-section__quote-icon">“</span>
              <div className="quality-section__feature-text">
                <h3>BẢN NGỮ HÓA HỆ SINH THÁI</h3>
                <p>Môi trường học tập toàn diện với ngân hàng đề thi, sách, bài giảng và bài tập phong phú, giúp học viên củng cố kiến thức và kỹ năng tự tin chinh phục mọi kỳ thi.</p>
              </div>
            </div>
          </div>
        </div>
       
        {/* === CỘT BÊN PHẢI (HÌNH ẢNH) === */}
        <div className="quality-section__image-wrapper">
          <img
            src={laptop}
            alt="Laptop"
            className="quality-section__laptop-image"
          />
          <img
            src={girl}
            alt="Cô gái"
            className="quality-section__girl-image"
          />
          <img
            src={decorTarget}
            alt="Trang trí mục tiêu"
            className="quality-section__decor-target"
          />
        </div>
      </div>
    </section>
  );
};