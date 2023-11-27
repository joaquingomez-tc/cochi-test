import React from "react";
import useNavStyles from "./NavbarCss";

export default function Navbar() {
  const classes = useNavStyles();
  return <div className={classes.header}>Navbar</div>;
}
