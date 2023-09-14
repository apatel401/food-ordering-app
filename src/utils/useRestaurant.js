import React, { useState, useEffect } from "react";

export default function useRestaurant(resId) {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}`
    );

    const json = await data.json();
    setRestaurant(json?.data);
  };

  return restaurant;
}
