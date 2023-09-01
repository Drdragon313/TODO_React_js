import React from "react";
import classes from "./button.module.scss";
const Button = ({ onClick, text, onChange, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      onChange={onChange}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
