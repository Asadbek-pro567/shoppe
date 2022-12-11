import React from 'react'
import './Footer.css'
import Logo from '../image/group10.png'

function Footer() {
  return (
    <>
    <div className="container">
        <div className='footer'>
            <hr />
            <div className='footer__list'>
                <ul>
                    <li>CONTACT</li>
                    <li>TERMS OF SERVICES</li>
                    <li>SHIPPING AND RETURNS</li>
                </ul>
                <input type="text" placeholder='Give an email, get the newsletter.'/> 
            </div>
            <img src={Logo} alt="" />
        </div>
    </div>
    
    
    
    
    </>

  )
}

export default Footer