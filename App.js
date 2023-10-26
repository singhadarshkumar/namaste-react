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
const RestaurantCard = (props) => {
    const {resData} = props;
    const {image, name, cuisine, avgRating, costForTwo, deliveryTime} = resData?.data;
    return(
        <div className="card-container">
            <div className="card-outter">
                <div className="res-card" style={StyledCard}>
                    <img src={image} alt="img" className="" />
                    <h3>{name}</h3>
                    <h4>{cuisine.join(", ")}</h4>
                    <h5>{avgRating} Stars</h5>
                    <h6>₹ {costForTwo / 100}</h6>
                    <span>{deliveryTime}mins</span>
                    <button className="cart-btn">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

// Json
const resList = [
    {
        data: {
            image: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Paratha Junction",
            cuisine: ["Breakfast", "Indian", "Snacks"],
            avgRating: "4.7",
            costForTwo: "40000",
            deliveryTime: "35"
        }
    },
    {
        data: {
            image: "https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "French Fries",
            cuisine: ["Breakfast", "French", "Snacks"],
            avgRating: "4.0",
            costForTwo: "90000",
            deliveryTime: "25"
        }
    },
    {
        data: {
            image: "https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Desert Store",
            cuisine: ["Italian", "Snacks"],
            avgRating: "4.4",
            costForTwo: "50000",
            deliveryTime: "15"
        }
    }
];

// Body
const Body=()=>{
    return(
        <div className="main-container">
            <div className="search"></div>
            <div className="restro-container">
                {
                    resList.map(restaurant => (
                        <RestaurantCard resData = {restaurant} />
                    ))
                }
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