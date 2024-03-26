import './css/Commons.css';
import './App.css';
import Menu from '../components/Menu.jsx';
import MenuList from '../components/MenuList.jsx';

export default function App() {
  const list = [
    {href:"#home", name:"Home"},
    {href:"#about", name:"About"},
    {href:"#skills", name:"Skills"},
    {href:"#mywork", name:"My work"},
    {href:"#testimonial", name:"Testimonial"},
    {href:"#contact", name:"Contact"},
  ];

  return (
    <>
      <Menu href="#home" name="Home" bg="tomato"/>
      <Menu href="#about" name="About" bg="gray"/>
      <Menu href="#skills" name="Skills" bg="tomato"/>
      <hr />
      <MenuList list={list} />
    </>
  );
}

// indexe.html > index.js > AppMenu.js > Menu.jsx