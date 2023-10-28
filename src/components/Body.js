import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// Body
const Body=()=>{
    return(
        <div className="main-container">
            <div className="search"></div>
            <div className="row mt-3">
                {
                    resList.map(restaurant => ( 
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;