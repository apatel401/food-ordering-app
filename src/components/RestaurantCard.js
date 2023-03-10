import React from 'react'
import { BiStar, BiRupee } from 'react-icons/bi'
import { IMG_CDN_URL } from '../config'


function RestaurantCard({
    name,
  cuisines,
  cloudinaryImageId,
  deliveryTime,
  costForTwo,
  avgRating
}) {
 const avgRatingDecimal = Math.round(avgRating * 10) / 10

  return (
    <div className="w-52 m-2.5 p-2.5">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className='font-semibold text-md'>{name}</h2>
      <h3 className='font-normal text-sm mb-2 min-h-[60px]'>{cuisines.join(", ")}</h3>
      <div className='flex justify-between'>
      <h4 className={`font-semibold text-xs text-white inline-flex py-0.5 px-2 ${avgRatingDecimal > 4 ? 'bg-green-400' : 'bg-orange-400'}`}><BiStar className='h-4 mr-0.5' /> {avgRatingDecimal}</h4>
      <h4 className='text-xs text-black flex font-normal py-0.5'>{deliveryTime} min</h4>
      <h4 className='text-xs text-black flex font-normal py-0.5'><BiRupee className='h-4 mr-0.5'/> {Math.floor(costForTwo/100)} for two</h4>
      </div>
    </div>
  )
}

export default RestaurantCard
