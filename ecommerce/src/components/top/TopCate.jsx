import React from 'react'

import { FaBorderAll, FaCaretRight  } from 'react-icons/fa'

const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <i><FaBorderAll /></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i><FaCaretRight /> </i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopCate
