import React from "react";
import { BiStar, BiRupee } from "react-icons/bi";
import { IMG_CDN_URL } from "../config";

function RestaurantCard({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  avgRating,
  ...props}) {
  const avgRatingDecimal = Math.round(avgRating * 10) / 10;
  return (
    <div className="w-52 hover:rounded-2xl">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full h-48 object-cover rounded-2xl" />
      <div className="m-1">
      <h2 className="font-semibold text-md">{name}</h2>
      <h3 className="font-normal text-sm mb-2 min-h-[60px]">
        {cuisines.join(", ")}
      </h3>
      <div className="flex justify-between">
        <h4
          className={`font-semibold text-xs text-white inline-flex py-0.5 px-2 ${
            avgRatingDecimal > 4 ? "bg-green-400" : "bg-orange-400"
          }`}
        >
          <BiStar className="h-4 mr-0.5" /> {avgRatingDecimal}
        </h4>
        <h4 className="text-xs text-black flex font-normal py-0.5">
          {props.sla.deliveryTime} min
        </h4>
        <h4 className="text-xs text-black flex font-normal py-0.5">
          <BiRupee className="h-4 mr-0.5" /> {costForTwo}
        </h4>
      </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
