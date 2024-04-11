import '../css/Avata.css';

export default function Avata({image, isNew}) {
  return (
    <div className="avata">
      <img src={image} className="avata-img"></img>
      { isNew && <span className="new">New</span> }
   
    </div>
  );
}

