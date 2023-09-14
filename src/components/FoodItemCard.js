import React from "react";
import { BiRupee } from "react-icons/bi";
import { IMG_CDN_URL } from "../config";

function FoodItemCard(props) {
  console.log(props);
  const { name, imageId, description, defaultPrice, price } = props;
  return (
    <div className="w-52 m-2.5 p-2.5 bg-gray-100">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-semibold text-md">{name}</h2>
      <div className="flex justify-between">
        <h4 className="text-xs text-black flex font-normal py-0.5">
          {description}
        </h4>
        <h4 className="text-xs text-black flex font-xl py-0.5">
          <BiRupee className="h-4 mr-0.5" />{" "}
          {defaultPrice ? defaultPrice / 100 : price / 100}
        </h4>
      </div>
    </div>
  );
}

export default FoodItemCard;
