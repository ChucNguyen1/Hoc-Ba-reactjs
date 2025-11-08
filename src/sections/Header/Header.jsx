import "./Header.css";
import { FaThLarge, FaChartLine, FaLayerGroup, FaChevronDown } from "react-icons/fa";
import { LuFilePenLine } from "react-icons/lu";

export const Header = () => {
  return (
    <header className="header">
      {/* Thanh vàng bên trái */}
      <div className="header__left-shape"></div>

      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo-link">
          <img src="/logo.png" alt="Học Bá Logo" className="header__logo" />
        </a>

        {/* Navigation */}
        <nav>
          <ul className="header__nav">
            <li>
              <a href="#trang-chu" className="header__nav-link">
                <FaThLarge className="header__icon" />
                Trang Chủ
                <FaChevronDown className="header__icon--dropdown" />
              </a>
            </li>
            <li>
              <a href="#lo-trinh" className="header__nav-link">
                <FaChartLine className="header__icon" />
                Xây Dựng Lộ Trình
                <FaChevronDown className="header__icon--dropdown" />
              </a>
            </li>
            <li>
              <a href="#khoa-hoc" className="header__nav-link">
                <FaLayerGroup className="header__icon" />
                Khóa Học
                <FaChevronDown className="header__icon--dropdown" />
              </a>
            </li>
            <li>
              <a href="#ebook" className="header__nav-link">
                <LuFilePenLine className="header__icon" />
                Ebook
                <FaChevronDown className="header__icon--dropdown" />
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="#dang-ky" className="header__cta-button">
          ĐĂNG KÝ TƯ VẤN
        </a>
      </div>
    </header>
  );
};
