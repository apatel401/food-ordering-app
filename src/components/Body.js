import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import CardShimmer from "./CardShimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    let changingAPI = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //updated API Call as per live data
    //added condition in case of change of api data sequence
    if(changingAPI) {
      setRestaurantData(
        changingAPI
      );
      setFilterRestaurantData(
        changingAPI
      );
    } else {
      setRestaurantData(
        json?.data?.cards[Math.floor(Math.random() * 10)]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilterRestaurantData(
        json?.data?.cards[Math.floor(Math.random() * 10)]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
   
  }

  if (!isOnline) {
    return <h1>offline, Please check your Internet connection</h1>;
  }
  //early return
  // if(!restaurantData) return;
  // if (!restaurantData) return;

  return restaurantData?.length === 0 || !restaurantData ? (
    <CardShimmer />
  ) : (
    <>
      <div className="bg-phew text-white">
        <div className="w-5/6 my-0 mx-auto h-44 flex flex-col justify-center items-end py-8 pr-0 pl-8">
          <h2 className="text-xl mb-4">
            Great restaurants in your city, delivering to you
          </h2>
          <p className="text-sm mb-4">
            Set exact location to find the right restaurants near you.
          </p>
          <div className="flex" style={{ height: "40px" }}>
            <input
              data-testid="search-input"
              className="text-black rounded-l-md pl-2 focus:outline-none"
              type="text"
              placeholder="Search.."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="rounded-r-md bg-pinky p-2 flex justify-center text-base"
              data-testid="search-btn"
              onClick={(e) => {
                const filteredData = filterData(searchText, restaurantData);
                setFilterRestaurantData(filteredData);
              }}
            >
              Find Food
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center mt-5 gap-4"
        data-testid="rest-list"
      >
        {filterRestaurantData.length === 0 ? (
          <h2>No restaurant Found. Try different name</h2>
        ) : (
          filterRestaurantData.map((restaurant, index) => {
            return (
              <Link
                key={index}
                to={`/restaurant/${restaurant.info.id}`}
                className="hover:cursor-pointer hover:shadow-lg hover:scale-105 hover:transition-all hover:rounded-2xl"
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Body;
