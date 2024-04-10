import Avata from './Avata';

import '../css/AvataList.css';

export default function AvataList({list}) {
  return ( 
    <ul className="avata-list">
      { list.map( obj => (
         <li><Avata image={obj.image} name={obj.name} /></li>
        )) }
    </ul>
  );
}