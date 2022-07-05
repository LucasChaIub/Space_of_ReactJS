import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FiChevronDown } from 'react-icons/fi'
import { BiBorderAll } from 'react-icons/bi'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span><BiBorderAll /></span>
            <h4>
              Categories<i><FiChevronDown /></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/user">User Account</Link>
              </li>
              <li>
                <Link to="/vendor">Vendor Account</Link>
              </li>
              <li>
                <Link to="/track">Track My Order</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='close home-btn'><FaTimes /></i> : <i className='open'><FaBars /></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar