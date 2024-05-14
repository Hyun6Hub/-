import "../css/Avata.css";

export default function Avata({ image, name }) {
  return (
    <div className="avata">
      <img src={image} className="avata-img"></img>
      <p className="avata-name">{name}</p>
    </div>
  );
}
