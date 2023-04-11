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
  const restaurant = useRestaurant(resId);
  const [categories, setCatogories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getC();
  }, [restaurant]);

  const getC = () => {
    const output = restaurant && Object.values(restaurant?.menu?.items).map(
      (v) => v.category
    );
    setCatogories([...new Set(output)]);
  };

  const handleAdd = item => {
    dispatch(addItem(item));
  };

  const _menu =
    restaurant &&
    Object.values(restaurant?.menu?.items).map((item) => (
      <div key={item.id} className="flex justify-between p-8 border-b-2">
        <div className="flex flex-col">
          <p>{item?.name}</p>
          <p>{item?.category}</p>
          <p>
            <BiRupee /> {Math.floor(item.price / 100)}
          </p>
        </div>
        <div className="w-40 h-auto">
          {item?.cloudinaryImageId ? (
            <>
              <img
                src={IMG_CDN_URL + item?.cloudinaryImageId}
                className="w-full max-w-full"
              />
              <button
                className="rounded-md bg-pinky p-2 my-4 mx-auto flex justify-center text-base"
                onClick={() => handleAdd(item)}
              >
                Add
              </button>
            </>
          ) : (
            <button
              className="rounded-md bg-pinky p-2 my-4 mx-auto flex justify-center text-base"
              onClick={() => handleAdd(item)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    ));

    const menuTab = categories && categories.map((category) => <li className=" m-1 py-1 px-3 bg-[#00c575] border rounded-md">{category}</li>)
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
        <h1 data-testid="menuTitle">Menu</h1>
        <ul className=" flex flex-wrap justify-center w-3/4 my-1 mx-auto text-xs ">
          {menuTab}
        </ul>
        <div data-testid="menu">
        {_menu}
        </div>
      </div>
  );
}

export default RestaurantMenu;
