import React from "react";
import web from "../src/images/hero-img.svg"

import Common from "./Common";

const Home=() =>{
    return(
      <>
     <Common name=" Grow your Business with " imgsrc={web} visit="/Service" btnname="Get started"/>
      </>
    );
  }
  
  export default Home;