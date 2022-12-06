import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { VscHeart } from 'react-icons/vsc'

// import the scss file
import './header.scss'

const Header = () => {
  return (
    <header>
      {/* main header with logo, search input and user info */}
      <div className="top_header"></div>
      <div className="main_header">
        <div className="logo_wrapper">
          <span className="logo_name">Shop</span>
        </div>
        {/* search product input */}
        <div className="search_product_input">
          <form action="">
            <input type="text" placeholder="search for Products" />
            <button type="submit" className="search_button">
              <FiSearch className="search_icon" />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
