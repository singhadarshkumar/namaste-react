import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

// Body
const Body=()=>{

    //Local State Variable -Super powerful variable
    const [listOfRestro, setListOfRestro] = useState(resList);


    useEffect (()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }

    return(
        <div className="main-container">
            <div className="d-flex align-items-center">
                <div className="filter mt-3">
                    <button className="filter-btn me-3" onClick={()=> {
                        const filteredList = listOfRestro.filter((res)=> res.data.avgRating > 4);
                        // console.log(listOfRestro);
                        setListOfRestro(filteredList);
                    }}>
                        Top Rated Restro
                    </button>
                    <button className="filter-btn me-3" onClick={()=> {
                        const filteredList = listOfRestro.filter((res)=> res.data.costForTwo > 20000);
                        // console.log(listOfRestro);
                        setListOfRestro(filteredList);
                    }}>
                        Low Price
                    </button>
                </div>
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