import React, { useState } from "react";
import Items from "./Items";
import LastNews from "./LastNews";

function Content() {
    return (
        <div className='container'> 
        <div className="content">
            <Items />
            <LastNews />            
        </div>
        </div>
    )
}
export default Content