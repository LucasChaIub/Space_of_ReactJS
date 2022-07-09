import React from 'react'

import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa'
import logo from '../../components/assets/images/logo.svg'

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i><FaSearch /></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='icon-circle'><FaUser /></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='icon-circle'><FaShoppingBag /></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>    
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
