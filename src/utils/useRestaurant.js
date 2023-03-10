import React, {useState, useEffect} from 'react'

export default function useRestaurant(resId) {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
      }, []);
    
      const getRestaurantMenu = async () => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${resId}`
        );
        const json = await data.json();
        setRestaurant(json?.data);
      };

  return restaurant
}
