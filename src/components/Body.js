import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

// Body
const Body=()=>{

    //Local State Variable -Super powerful variable
    const [listOfRestro, setListOfRestro] = useState(resList);

    return(
        <div className="main-container">
            <div className="filter mt-3">
                <button className="filter-btn" onClick={()=> {
                    const filteredList = listOfRestro.filter((res)=> res.data.avgRating > 4);
                    console.log(listOfRestro);
                    setListOfRestro(filteredList);
                }}>
                    Top Rated Restro
                </button>
            </div>
            <div className="row mt-3">
                {
                    listOfRestro.map(restaurant => ( 
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;