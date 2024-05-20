// props = {text:'All'} => {props.text}
// {text} = props       => {text}
export default function Button({ text, bg }) {
  return <button style={{ backgroundColor: bg }}>{text}</button>;
}

/* 버튼 만드는 틀을 만듬 */
