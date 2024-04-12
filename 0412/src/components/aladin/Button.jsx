import '../../css/aladin/Button.css';

export default function Button({text, className}) {

  return (
    <button 
          type="button"
          className={className}
    >{text}</button>
  );
}
