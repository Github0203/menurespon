import React from "react";
import {data} from "../../data";


function ItemsLatsNews() {
return(
    <>
    {/* <div className="itemlastnew">
        <img src='http://file.hstatic.net/1000152881/article/screen-shot-2021-06-03-at-93237-pm-1626155186849447308574_6eb5c6992e884003849187475a753e7b.png' />
        <div className="conten-item">
        <h3>
        What is Lorem Ipsum?
        </h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
    </div> */}
     <ul>
    {data.map((item, index) => {
        return (
            <li key={index}>
            <div className="itemlastnew">
        <img src={item.product_link} />
        <div className="conten-item">
        <h3>
        {item.product_title}
        </h3>
        <p>
        {item.product_description}
        </p>
        </div>
    </div>
    </li>
        );
      })
    }
    </ul>
    </>
)
}
export default ItemsLatsNews