// Photo.js
import React from "react";

const Photo = ({ src, alt }) => {
  return (
    <div className="photo-container">
      <img src={src} alt={alt} className="photo" />
    </div>
  );
};

export default Photo;
