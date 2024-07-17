import Avata from "./Avata";
import "../css/Avata.css";

export default function Profile({ image, name, title }) {
  return (
    <div className="profile">
      <Avata image={image} />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-title">{title}</p>
    </div>
  );
}
