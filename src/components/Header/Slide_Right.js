import React, { useState } from "react";
import { data } from "../../data";

function Slide_Right() {
  return(
  <ul className="slide_rightul">
    {data.map((item, index) => {
      return <>
        {index === 1
          ?
          <li key={index} className="slide_right">
            <h1>
              {item.product_title}
            </h1>
            <p>
              {item.product_description}
            </p>
            <div className="btn-slide">Click</div>
          </li>
          :
          ''
        }
      </>
    })
  }
  </ul>
  )
}
export default Slide_Right
