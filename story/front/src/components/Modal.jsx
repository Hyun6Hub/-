// src/components/Modal.js
import React from "react";
import "./Modal.css"; // 스타일을 위한 CSS 파일

const Modal = ({ isOpen, onClose, children, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          닫기
        </button>
        {imageUrl && (
          <div className="modal-image">
            <img src={imageUrl} alt="Modal" />
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
