import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Komeshan_logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState('');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  }

  const handleMenuClick = (e) => {
    setMenu(e);
    closeMenu(); 
  }

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p
              onClick={() => handleMenuClick('home')}
              className={menu === 'home' ? 'active' : ''}
            >
              Home
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p
              onClick={() => handleMenuClick('about')}
              className={menu === 'about' ? 'active' : ''}
            >
              About Me
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p
              onClick={() => handleMenuClick('work')}
              className={menu === 'work' ? 'active' : ''}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p
              onClick={() => handleMenuClick('contact')}
              className={menu === 'contact' ? 'active' : ''}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
