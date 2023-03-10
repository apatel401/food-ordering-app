import React from 'react'
import { BiRupee } from 'react-icons/bi'
import { IMG_CDN_URL } from '../config'


function FoodItemCard({
    name,
  cloudinaryImageId,
description,
price
}) {

  return (
    <div className="w-52 m-2.5 p-2.5">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className='font-semibold text-md'>{name}</h2>
      <div className='flex justify-between'>
      <h4 className='text-xs text-black flex font-normal py-0.5'>{description}</h4>
      <h4 className='text-xs text-black flex font-normal py-0.5'><BiRupee className='h-4 mr-0.5'/> {price/100}</h4>
      </div>
    </div>
  )
}

export default FoodItemCard
