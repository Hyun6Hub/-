import "../css/Avata.css";

export default function Avata({ image, name }) {
  return (
    <div className="avata">
      <img src={image} className="avata-img"></img>
      <p className="avata-name">{name}</p>
    </div>
  );
}
/* image, name란 props받음 */
/* image는 props로 받은 url, name는 props로 받은값 표시 */

/* imagem, name에 props를 제공하면
받은정보를 사용하여 이미지와 이름 출력가능함
이 컴포넌트 자체에서 사진, 이름 출력 아님*/
