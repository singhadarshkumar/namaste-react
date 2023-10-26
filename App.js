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
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            {/* <div className="card-outter"> */}
                <div className="res-card" style={StyledCard}>
                    <div className="img-area">
                        <img src={image} alt="img" className="" />
                    </div>
                    <div className="card-bottom-content">
                        <div>
                            <h3 className="mb-1">{name}</h3>
                            <h4>{cuisine.join(", ")}</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className="mb-0">{avgRating} Stars</h5>
                                <h6 className="mb-0">₹ {costForTwo / 100}</h6>
                            </div>
                            <span>{deliveryTime}mins</span>
                        </div>
                        <button className="cart-btn">
                            Add To Cart
                        </button>
                    </div>
                </div>
            {/* </div> */}
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
    },
    {
        data: {
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Dosa Samraj",
            cuisine: ["South-Indian", "Any Time"],
            avgRating: "4.6",
            costForTwo: "80000",
            deliveryTime: "30"
        }
    }
];

// Body
const Body=()=>{
    return(
        <div className="main-container">
            <div className="search"></div>
            <div className="row mt-3">
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