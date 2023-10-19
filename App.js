import React from "react";
import ReactDOM from "react-dom/client"

//react Element 

const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hi React"
);
console.log(heading);

const jsxHeading = <h1 id="heading">Hello World</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("abc"));
root.render(jsxHeading);