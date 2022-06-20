import React from 'react'

import { FaBolt } from 'react-icons/fa'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems }) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i><FaBolt/></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
