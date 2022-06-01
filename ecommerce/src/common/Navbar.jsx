import React from 'react'
import { Link } from "react-router-dom"
 
import { 
  ContainerDFlex 
} from './Styles'

import { FiChevronDown } from 'react-icons/fi'
import { BiBorderAll } from 'react-icons/bi'

const Navbar = () => {
  return (
    <>
      <NavbarHeader>
        <ContainerDFlex>
          <CategoriesDFlex>
            <span><BiBorderAll /></span>
            <h4>
              Categories<FiChevronDown />
            </h4>
          </CategoriesDFlex>

          <NavLink>
            <Nav>
              <NavList>
                <Link to='/'>Home</Link>
              </NavList>
              <NavList>
                <Link to='/pages'>Pages</Link>
              </NavList>
              <NavList>
                <Link to='/user'>User Account</Link>
              </NavList>
              <NavList>
                <Link to='/vendor'>Vendor Account</Link>
              </NavList>
              <NavList>
                <Link to='/track'>Track My Order</Link>
              </NavList>
              <NavList>
                <Link to='/contact'>Contact</Link>
              </NavList>
            </Nav>
          </NavLink>
        </ContainerDFlex>
      </NavbarHeader>
    </>
  )
}

export default Navbar