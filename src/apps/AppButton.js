// index.html > index.js > ./apps/AppButton.js > Button.jsx
import Button from '../components/Button.jsx';
import ButtonList from '../components/ButtonList.jsx';

export default function App() {
  const list = new Array();
  list.push({text:'All', bg:'red'});
  list.push({text:'Front-end'});
  list.push({text:'Back-end', bg:'green'});
  list.push({text:'Mobile'});
 
  return (
    <>
      <Button text="All" bg="red"/>
      <Button text="Front-end"/>
      <Button text="Back-end" bg="green"/>
      <Button text="Mobile"/>
      <hr/>
      <ButtonList list={list} />
    </>
  );
}