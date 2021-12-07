import React from "react";
import classes from "./IndexPage.module.css";

const IndexPage = () => {
  return (
    <>
      <h2 className={classes.centerText}>Welcome to the Furry Friend Home!</h2>
      <h3>
        We help find homes for the cats and kittens that need a family. Take a look 
        around to see if you want to help give one of our friends a forever home!
      </h3>
      <p> Contact us at 123-123-1234 or furryfriend@mail.com for more information!</p>
      <img src="/cat.jpg"/>
    </>
  );
};

export default IndexPage;
