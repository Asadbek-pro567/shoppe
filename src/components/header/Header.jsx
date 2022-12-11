import './Header.css'

import React from 'react'
import Logo from '../image/SHOPPE.png'
import Folder from '../image/folder.png'
import Shopping from '../image/shopping.png'
import User from '../image/user.png'

function Header() {
  return (
    <>
    <div className="container">
        <div className='header__list'>
            <img src={Logo} alt="" />
            <ul className='header__inner'>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Our story</a></li>
                <hr />
            </ul>
            <ul className='header__ul'>
                <li><a href="#"><img src={Folder} alt="" /></a></li>
                <li><a href="#"><img src={Shopping} alt="" /></a></li>
                <li><a href="#"><img src={User} alt="" /></a></li>
            </ul>
        </div>
        <hr className='header__hr'/>

    </div>
    
    
    </>
  )
}

export default Header