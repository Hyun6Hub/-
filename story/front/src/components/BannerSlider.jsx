import React, { useState, useEffect } from "react";
import "../components/BannerSlider.css";

const BannerSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  const handleNavClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true); // 클릭 시 자동 전환을 일시 정지
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="banner-slider">
      <div className="slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </div>
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? "재개" : "정지"}
      </button>
    </div>
  );
};

export default BannerSlider;
