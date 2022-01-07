import React, { useState } from "react";
import Slide_Left from "./Slide_Left";
import Slide_Right from "./Slide_Right";

function Slide() {
  return <>
  <div className='container'> 
  <div className="slide">
  <Slide_Left />
  <Slide_Right />
  </div>
  </div>
  </>
}
export default Slide;
