import React from "react";

export default function Menu({ href, name }) {
  return (
    <a className="header__menu__item" href={href}>
      {name}
    </a>
  );
}
/* <a>는 앵커태그의 시작을 나타냄, 링크를 생성하는 태그, href속성을 사용하여 링크 목적지 지정 */
/* 이 컴포넌트는 링크를생성함 */
