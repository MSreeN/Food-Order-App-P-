import classes from "./Button.module.css";

function Button(props) {
  return (
    <button {...props.button}>
      {props.children}
      {props.button.content}
    </button>
  );
}

export default Button;
