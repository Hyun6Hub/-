import logo from "./logo.svg";
import "./App.css";
import "./css/Commons.css";
import Avata from "./components/Avata.jsx";
import AvataList from "./components/AvataList.jsx";

export default function App() {
  const list = [
    { image: "images/avata.png", name: "Judy" },
    { image: "images/people1.webp", name: "James" },
    { image: "images/people2.webp", name: "Kevin" },
    { image: "images/people3.webp", name: "Anna" },
  ];

  return (
    <>
      <AvataList list={list} />
      {/* 리스트형태로 출력 양을 줄일수 있다 avatalist안에 avata가 들어감 */}
      <Avata image="images/avata.png" name="Judy" />
      {/* 하나하나 적어서 출력 */}
      <Avata image="images/people1.webp" name="James" />
      <Avata image="images/people2.webp" name="Kevin" />
      <Avata image="images/people3.webp" name="Anna" />
    </>
  );
}

// indexe.html > index.js > App.js > Avata.jsx
