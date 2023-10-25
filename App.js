import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header-> logo, nav items
 * Body-> Search Bar, all the cards
 * Footer-> links, copyrights, logo, contact, address
 */

//Header
const Header = () =>{
    return (
        <div className="header">
            <div className="main-container header-area">
                <div className="logo-container">
                    <img src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-burger-logo-vector-design-free-png-clipart-png-image_6081288.png" alt="img-logos" width={100} className="logo"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


// for inline css 
const StyledCard = {
    backgroundColor: '#ffffff'
};
// card
const RestaurantCard = () =>{
    return(
        <div className="res-card" style={StyledCard}>
            <img src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" className="" />
            <h3>Kaveri Restaurant</h3>
            <h4>French</h4>
            <h5>4.7</h5>
            <h6>40mins</h6>
        </div>
    )
}


// Body
const Body=()=>{
    return(
        <div className="main-container">
            <div className="search"> </div>
            <div className="restro-container">
                <div className="card-container">
                   <div className="card-outter">
                        <RestaurantCard />
                   </div>
                </div>
                <div className="card-container">
                   <div className="card-outter">
                        <RestaurantCard />
                   </div>
                </div>
                <div className="card-container">
                   <div className="card-outter">
                        <RestaurantCard />
                   </div>
                </div>
                <div className="card-container">
                   <div className="card-outter">
                        <RestaurantCard />
                   </div>
                </div>
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("abc"));
root.render(<AppLayout />);