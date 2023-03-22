import classes from "./Button.module.css";

function Button(props) {
  return (
    <button {...props.button}>
      {props.children}
      {props.content}
    </button>
  );
}

export default Button;
