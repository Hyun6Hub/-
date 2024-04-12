import '../css/Commons.css';
import Avata from '../components/Avata.jsx';
import AvataList from '../components/AvataList.jsx';

export default function App() {
  // const list = [
  //   {image:'images/avata.png', name:'Judy'},
  //   {image:'images/people1.webp', name:'James'},
  //   {image:'images/people2.webp', name:'Kevin'},
  //   {image:'images/people3.webp', name:'Anna'}
  // ];

  return (
    <>
    {/* <AvataList list = {list} /> */}
    <Avata image='images/avata.png' name='Judy' isNew={true} />
    <Avata image='images/people1.webp' name='James'/>
    <Avata image='images/people2.webp' name='Kevin'/>
    <Avata image='images/people3.webp' name='Anna'/>
    </>
  );
}

// indexe.html > index.js > App.js > Avata.jsx