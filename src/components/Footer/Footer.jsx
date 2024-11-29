import React from 'react'
import './Footer.css'
import logo from '../../assets/Komeshan_logo.svg'
import linkedin from '../../assets/linkedin.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    
    const year = new Date();

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <AnchorLink className='anchor-link' offset={50} href='#navbar'>
                    <img src={logo} alt="" />
                </AnchorLink>
            </div>

            <div className="footer-top-right">
                <p>&copy; {year.getFullYear()} Komeshan. All rights reserved.</p>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <a href="https://www.linkedin.com/in/komeshan-moorthy-a3223a168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <img className='footer-bottom-left' src={linkedin} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Footer