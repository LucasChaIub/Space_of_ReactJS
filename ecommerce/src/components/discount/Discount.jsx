import React from 'react'

import { FaCaretRight } from 'react-icons/fa'
import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
      <section className="disocunt background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i><FaCaretRight /></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
