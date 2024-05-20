import "./css/Commons.css";
import "./App.css";
import Menu from "./components/Menu.jsx";
import MenuList from "./components/MenuList.jsx";

/* list는 여러가지 객체를 포함하는 배열 */
/* href 특정 섹션으로 넘어감, 링크의 이름 */
/* 각 객체는 href, name라는 두가지 속성을 가짐 */
export default function App() {
  const list = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skills", name: "Skills" },
    { href: "#mywork", name: "My work" },
    { href: "#testimonial", name: "Testimonial" },
    { href: "#contact", name: "Contact" },
  ];

  /* return은 컴포넌트의 jsx를 반환함 */
  return (
    <>
      <Menu href="#home" name="Home" bg="tomato" />
      <Menu href="#about" name="About" bg="gray" />
      <Menu href="#skills" name="Skills" bg="tomato" />
      <hr />
      <MenuList list={list} />
      {/* 부모컴포넌트인 app은 MenuList컴포넌트를 호출하면서
      list라는 prop을 전달함 */}
    </>
  );
}

/* 화면에 출력되는 값은 리턴임 메뉴3개 밑줄 list나옴 */
/* MuenuList 컴포넌트 호출하며 list배열을 list속성으로 전달함 */
/* 왼쪽 list, MenuList 컴포넌트는 list라는 이름의 prop(속성)를 받음*/
/* 오른쪽 list, 이전에 정의된 배열*/

// indexe.html > index.js > AppMenu.js > Menu.jsx
