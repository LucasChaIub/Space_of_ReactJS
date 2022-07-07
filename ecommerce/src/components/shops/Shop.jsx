import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import './Style.css'

import { FaCaretRight } from 'react-icons/fa'

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row">
                <span>View all</span>
                <i><FaCaretRight /></i>
              </div>
            </div>

            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop