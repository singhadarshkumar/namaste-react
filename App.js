import React from "react";
import ReactDOM from "react-dom/client"
import logo from '/img/logo.png'; 
import profile from '/img/profile.png'; 

//react Element 
// const heading = <h1 id="heading">Hello World</h1>;
// console.log(heading);

// React Component
// Class Based Components - old way 
// Functional component -New way

// Functional component
// const number = 10000;

// component and element inside component 
// const HeadingComponent = () =>(
//     <div className="container">
//         <Title />
//         <h4>{number}</h4>
//         <h1 className="header">React Functional Component</h1>
//     </div>
// );

// const Title = () =>(
//     <div className="container">
//         <h2 className="title">Title Component</h2>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("abc"));
// root.render(<HeadingComponent />);


// Assignment task from 3- Q2:
const Logo = () => (
    <div>
        <img src={logo} alt="icon" style={{width: "20px"}}/>
    </div>
);
const SearchBar = () => (
    <div>
        <input type="text" className="searchbar" placeholder="Search"/>
    </div>
);
const Usericon = () => (
    <div>
        <img src={profile} alt="icon" style={{width: "30px"}}/>
    </div>
);

const Header = () => (
    <div className="header">
        <Logo />
        <SearchBar />
        <Usericon />
    </div>
);

const var_root = ReactDOM.createRoot(document.getElementById("abc"));
var_root.render(<Header />);