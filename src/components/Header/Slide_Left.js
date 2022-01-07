import React from "react";
import {data} from "../../data";


function Slide_Left() {
  return <>
  <ul className="slide_leftul">
  {data.map((item, index) => {
      return (    
        <>
        {index===1
          ?      
        <li key={index} className="slide_left">
          
          <img src='https://hc.com.vn/i/ecommerce/media/00033815_FEATURE_43326.jpg' />
          
          
        </li>
        :
          ''
          }
          </>
              )
        
  })
}
  </ul>
  </>;
}
export default Slide_Left;
