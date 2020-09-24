import React from "react";
import Common from "./Common";
import web from "../src/images/about-img.svg";

const About=() =>{
    return(
      <>
      <Common name=" Welcome to About Page " imgsrc={web} visit="/Contact" btnname="Contact Now"/>
      </>
    );
  }
  
  export default About;