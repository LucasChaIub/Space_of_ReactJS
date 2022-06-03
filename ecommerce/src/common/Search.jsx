import React from 'react'

import logo from '../components/assets/images/logo.svg'

import { Link } from 'react-router-dom'

import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa'

const Search = () => {
  return (
    <>
      <section className='search'>
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt='' />
          </div>

          <div className="search-box f_flex">
            <i><FaSearch /></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i><FaUser /></i>
            <div className="cart">
              <Link to='/cart'>
                <i><FaShoppingBag /></i>
                <span>0</span>    
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
