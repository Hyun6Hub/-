import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
        <a href="#" aria-label="YouTube">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>
        <a href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="#" aria-label="Blog">
          <FontAwesomeIcon icon={["fab", "blogger-b"]} />
        </a>
        <a href="#" aria-label="KakaoTalk">
          <FontAwesomeIcon icon="comment" />
        </a>
      </div>
      <div className="footer-info">
        <p>
          상호: 주식회사푸트 그녀의방 | 주소: 윤선동우체국 남구 울산광역시 |
          전화번호:1522-1504
        </p>
        <p>
          대표: 육정혁 | 사업자등록번호: 617-45-54569 | 사업자정보확인 |
          통신판매업신고번호: 제2020-울산북구-0001호 | 개인정보관리자: -
        </p>
        <p>
          이메일주소: 070-8639-8989 | 팩스번호: - | 메일:
          park.junghyuk@naver.com | 호스팅제공: 엔에이치엔고도(주)
        </p>
      </div>
      <div className="copyright">
        <p>
          COPYRIGHT (C) www.shehome.co.kr ALL RIGHTS RESERVED. DESIGNED BY
          BDESIGN.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
