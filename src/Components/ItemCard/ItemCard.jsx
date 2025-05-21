import React from 'react'
import './itemCard.scss'

const itemCard = ({imageId, title, price, isFreeShipping}) => {
  return (
    <div class='item-card'>

        {isFreeShipping && <span class='free-ship'>Free Shipping</span>}
        <img class='item-image' src={imageId[0]} alt="productImage" />
        <p class='item-title'>{title}</p>
        <p class='item-price'>{currency}{price}</p>

        <button class='add-to-cart'>Add to Cart</button>

    </div>
  )
}

export default itemCard 