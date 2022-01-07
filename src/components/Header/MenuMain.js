import React, { useState } from "react";
import data from "./data";
import { Link } from 'react-router-dom';


function MenuMain() {
  return (
    <div className="header">
      <div className='container'>
        <nav className='navbar'>
          <ul>
            {
              data.map((item, index) => {
                return(
                <li key={index}>
                  <Link to={item.to} className={item.exact ? "active" : ""} >
                    {item.name}
                  </Link>
                </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default MenuMain