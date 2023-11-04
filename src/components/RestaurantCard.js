// for inline css 
const StyledCard = {
    backgroundColor: '#ffffff'
};

import { useState } from "react";

// card
const RestaurantCard = (props) => {
    const {resData} = props;
    const {image, name, cuisine, avgRating, costForTwo, deliveryTime} = resData?.data;
    const [addItem, setAddItem] = useState("Add To Cart");
    return(
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="res-card" style={StyledCard}>
                <div className="img-area">
                    <img src={image} alt="img" className="" />
                </div>
                <div className="card-bottom-content">
                    <div>
                        <h3 className="mb-1">{name}</h3>
                        <h4>{cuisine.join(", ")}</h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">{"★ " + avgRating} Stars</h5>
                            <h6 className="mb-0">₹ {costForTwo / 100}</h6>
                        </div>
                        <span>{deliveryTime}mins</span>
                    </div>
                    <button className="cart-btn" id="add" onClick={() => setAddItem(addItem == "Add To Cart" ? "Added" : "Add To Cart")}>
                        {addItem}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;