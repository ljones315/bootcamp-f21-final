import React from "react";
import { helloWorld } from "../../actions/General";
import classes from "./IndexPage.module.css";

const IndexPage = () => {
  const data = fetch('api/cats');

  return (
    <>
      <h2 className={classes.centerText}>Animal Shelter!</h2>
      
      <p>Bootcamp animal shelter</p>
    </>
  );
};

export default IndexPage;
