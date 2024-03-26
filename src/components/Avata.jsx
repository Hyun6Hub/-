import '../css/Avata.css';

export default function Avata({image}) {
  return (
    <div className="avata">
      <img src={image} className="avata-img"></img>
    </div>
  );
}

