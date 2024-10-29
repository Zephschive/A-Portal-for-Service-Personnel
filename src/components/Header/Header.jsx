import React, { useRef, useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import '../Header/Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Getfundlogo from '../../assets/images/Getfundlogo.png';
import NSA from '../../assets/images/NSA.png';
import { IoMenu } from 'react-icons/io5';

const nav_link = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'about',
    display: 'About',
  },
  {
    path: 'sign-in',
    display: 'Sign-In',
  },
  {
    path: 'contact-us',
    display: 'Contact-us',
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };


  const WelcomeRef = useRef(null);


  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        WelcomeRef.current.classList.add('d-xl-none');
      } else {
        WelcomeRef.current.classList.remove('d-xl-none');
      }
    });
  };

  

  useEffect(() => {

    stickyHeaderFunc();

  
    
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);

      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  },
  
  
  []);

  return (
    <header className="header sticky-lg-top" ref={headerRef}>
      <Container>
        <Row >
          <div className="nav_wrapper ">
            <div className="Getfund-logo">
              <img src={Getfundlogo} alt="" />
            </div>
            <div className={`navigation ${isMobileMenuOpen ? 'show' : ''}`} ref={menuRef}>
              <ul className="navlist">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav_active' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Getfund-logo">
              <img src={NSA} alt="" />
            </div>
            <span className="menu-logo" onClick={toggleMobileMenu}>
              <IoMenu />
            </span>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} ref={menuRef}>
              <ul className="navlist-mobile-menu">
                {nav_link.map((item, index) => (
                  <li className="nav_item-mobile-menu" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav_active' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Row>
        <Row>

          <div className="Welcome-bar text-center d-flex align-items-center justify-content-center display-3 text-white d-none d-lg-block d-xl-block shadow  rounded" ref={WelcomeRef}>
          Welcome to the Getfund NSS Portal 


          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
