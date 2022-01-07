import React from "react";
import {data} from "../../data";

function Item() {
  return(
      <ul>
    {data.map((item, index) => {
        return (
            <li key={index}>
            <div className="item">
        <img src={item.product_link} />
        <h3>
        {item.product_title}
        </h3>
        <p>
        {item.product_description}
        </p>
    </div>
    </li>
  );
      })
    }
    </ul>
  )
}
export default Item;
