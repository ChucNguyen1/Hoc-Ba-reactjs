import "./HeroSection.css";
// --- PHẦN IMPORT GIỮ NGUYÊN ---
import heroTag from "/Hero-tag.png";
import studentBanner from "/student-banner.png";
import bookImage from "/book.png";

import { IoTriangleSharp } from "react-icons/io5";
// ... (các import khác giữ nguyên) ...

export const HeroSection = () => {
  return (
    <section className="hero">
      {/* ======== BÊN TRÁI ======== */}
      <div className="hero__content">
        {/* 1. Ảnh Tag (nằm riêng) */}
        <div className="hero__tag">
          <img
            src={heroTag}
            alt="Trung tâm dạy tiếng Trung trực tuyến #1 Việt Nam"
          />
        </div>

        {/* --- CẬP NHẬT: Gộp 2 text vào 1 div --- */}
        <div className="hero__text-block">
          <h1 className="hero__title">
            Chương trình <br />
            <span>ĐÀO TẠO TOÀN DIỆN</span>
          </h1>
          <div className="hero__subtitle">TIẾNG TRUNG CHUẨN QUỐC TẾ</div>
        </div>
        {/* --- KẾT THÚC CẬP NHẬT --- */}

        {/* 3. List 3 nút (nằm riêng) */}
        <div className="hero__list">
          <div className="hero__item">
            <IoTriangleSharp className="hero__icon" />
            <span className="hero__text">NHẬN LỘ TRÌNH CÁ NHÂN HOÁ</span>
            <span className="hero__number hero__number--1">01</span>
          </div>
          {/* (Các item 02, 03 giữ nguyên) */}
          <div className="hero__item">
            <IoTriangleSharp className="hero__icon" />
            <span className="hero__text">CHAT CÙNG CỐ VẤN HỌC TẬP</span>
            <span className="hero__number hero__number--2">02</span>
          </div>
          <div className="hero__item">
            <IoTriangleSharp className="hero__icon" />
            <span className="hero__text">THAM KHẢO CHƯƠNG TRÌNH HỌC</span>
            <span className="hero__number hero__number--3">03</span>
          </div>
        </div>
      </div>


      {/* ======== BÊN PHẢI (Giữ nguyên JSX) ======== */}
      <div className="hero__image">
        <div className="hero__gradient-bg"></div>
        <img src={studentBanner} alt="Học viên" className="hero__student" />
        {/* (Các bubble giữ nguyên) */}
        <div className="hero__bubble hero__bubble--top">
          <span>
            Lộ Trình <strong>CÁ NHÂN HÓA</strong>
          </span>
        </div>
        <div className="hero__cta">
          <span>CAM KẾT ĐẦU RA</span>
          <div className="hero__underline"></div>
        </div>
        <div className="hero__bubble hero__bubble--bottom">
          <span>
            <strong>Đảm bảo</strong> HỌC ĐƯỢC | GIAO TIẾP ĐƯỢC
          </span>
        </div>
        <img src={bookImage} alt="Book" className="hero__book" />
      </div>

      {/* 3 chấm tròn dưới cùng (Giữ nguyên) */}
      <div className="hero__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    
  );
};
