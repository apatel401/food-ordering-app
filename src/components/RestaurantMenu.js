import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import CardShimmer from "./CardShimmer";
import useRestaurant from "../utils/useRestaurant";
import { BiStar, BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantMenu() {
  const { resId } = useParams();
  const restaurantDetails = useRestaurant(resId);
  const restaurant = restaurantDetails?.cards[2]?.card?.card?.info;
  const restaurantMenu =
    restaurantDetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card
      .card.itemCards;
  const [categories, setCatogories] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getC();
  // }, [restaurant]);

  // const getC = () => {
  //   const output = restaurant && Object.values(restaurant?.menu?.items).map(
  //     (v) => v.category
  //   );
  //   setCatogories([...new Set(output)]);
  // };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const _menu =
    restaurantMenu &&
    Object.values(restaurantMenu).map((item) => {
      let menuItem = item.card.info;
      //  console.log(menuItem)
      return (
        <div key={menuItem.id} className="flex justify-between p-8 border-b-2">
          <div className="flex flex-col">
            <p className="font-semibold text-md">{menuItem?.name}</p>
            <p>{menuItem?.category}</p>
            <p className="font-semibold text-lg">
              <BiRupee className="inline-block" />{" "}
              {menuItem.defaultPrice
                ? Math.floor(Number(menuItem.defaultPrice) / 100)
                : Math.floor(Number(menuItem.price) / 100)}
            </p>
          </div>
          <div className="w-40 h-auto">
            {menuItem?.imageId ? (
              <>
                <img
                  src={IMG_CDN_URL + menuItem?.imageId}
                  className="w-full max-w-full"
                />
                <button
                  className="rounded-md bg-[#0db414] text-white p-2 my-4 mx-auto flex justify-center text-base"
                  onClick={() => handleAdd(menuItem)}
                >
                  Add
                </button>
              </>
            ) : (
              <button
                className="rounded-md bg-[#0db414] text-white p-2 my-4 mx-auto flex justify-center text-base"
                onClick={() => handleAdd(menuItem)}
              >
                Add
              </button>
            )}
          </div>
        </div>
      );
    });

  // const menuTab = categories && categories.map((category) => <li className=" m-1 py-1 px-3 bg-[#00c575] border rounded-md">{category}</li>)
  return !restaurant ? (
    <CardShimmer />
  ) : (
    <div className="flex flex-col">
      <div className="rest-menu-details flex flex-row justify-center p-12 items-center bg-phew text-white">
        <div className="h-auto w-64 ">
          <img
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            className="w-full min-w-full"
          />
        </div>

        <div className="rest-menu-main py-4 px-8">
          <h2 className="text-2xl font-bold">{restaurant?.name}</h2>
          <h3 className="text-md font-regular">{restaurant?.area}</h3>
          <h3 className="text-md font-regular">{restaurant?.city}</h3>
          <h3 className="text-md font-regular">
            {restaurant?.avgRating} stars
          </h3>
          <h3 className="text-md font-regular">{restaurant?.costForTwoMsg}</h3>
        </div>
      </div>
      <div className=" w-10/12 m-auto">
        <h1
          data-testid="menuTitle"
          className="text-xl font-bold text-center my-4"
        >
          Menu
        </h1>
        <ul className=" flex flex-wrap justify-center w-3/4 my-1 mx-auto text-xs ">
          {/* {menuTab} */}
        </ul>
        <div data-testid="menu">{_menu}</div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
