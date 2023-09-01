import React from "react";
import classes from "./textbox.module.scss";
const Textbox = ({
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  checked,
}) => {
  return (
    <input
      className={classes.textbox}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      checked={checked}
    />
  );
};

export default Textbox;
