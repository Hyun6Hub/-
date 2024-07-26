import "../css/style.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";

export default function Root({ cartCount }) {
  const location = useLocation();
  const bannerImages = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    // 추가 이미지들...
  ];

  return (
    <div>
      <Header cartCount={cartCount} />

      {location.pathname === "/" && <BannerSlider images={bannerImages} />}
      <Outlet />
      <Footer />
    </div>
  );
}
