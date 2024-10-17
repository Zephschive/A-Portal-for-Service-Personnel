import React, { useRef, useEffect } from 'react'
import { Container, Row} from 'reactstrap'
import '../Header/Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Getfundlogo from  '../../assets/images/Getfundlogo.png';
import NSA from '../../assets/images/NSA.png'

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
    path: 'Contact-us',
    display: 'Contact-us',
  }
];





const Header = () => {

  const headerRef = useRef(null);

  return  <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="Getfund-logo">
            <img src={Getfundlogo} alt="" />
          </div>
          <div className="navigation">
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
        </div>
      </Row>
    </Container>
  </header>
}
export default Header