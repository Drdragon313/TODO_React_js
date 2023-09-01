import React from "react";
import classes from "./heading.module.scss";

const Heading = ({ text }) => {
  return <h2 className={classes.heading}>{text}</h2>;
};

export default Heading;
