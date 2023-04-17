import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import { Button } from './Button';

function Navbar () {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)
  
  const handlClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
       setButton(false);
    } else {
      setButton(true);
    }
  };

useEffect(() => {
  showButton()
}, []);

  window.addEventListener('resize', showButton);

  return (
   <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='#' className='navbar-logo' onClick={closeMobileMenu}>
        <img src="icons/Logo-AS.png" className="logo-as"/>
        </Link>
        <div className='menu-icon' onClick={handlClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='#' smooth className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link smooth to='#services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link smooth to='#contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
   </> 
  );
} 

export default Navbar;