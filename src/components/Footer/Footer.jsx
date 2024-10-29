import React from 'react'
import "../Footer/Footer.css"
import { Container, Col, Row } from 'reactstrap'
import Getfund_logo from'../../assets/images/Getfundlogo.png'
import NSA from '../../assets/images/NSA.png'
import {  NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {


  const first_row_links= [
    {
      path: 'https://www.getfund.gov.gh/#',
      display: 'Privacy policy',
    },
    {
      path: 'https://www.getfund.gov.gh/faq/',
      display: 'FAQs',
    },
    {
      path: 'https://www.getfund.gov.gh/#',
      display: 'Site Map',
    },
    {
      path: 'https://www.getfund.gov.gh/#',
      display: 'Terms Of Use',
    }
  ];

  const second_row_links = [
    {
      path: 'https://www.getfund.gov.gh/who-we-are/',
      display: 'Who We Are',
    },
    {
      path: 'https://www.getfund.gov.gh/getfund-news/',
      display: 'Latest news',
    },
    {
      path: 'https://www.getfund.gov.gh/#',
      display: 'Career',
    },
    {
      path: 'https://www.getfund.gov.gh/contact/',
      display: 'Contact',
    }
  ];


  return <footer className="footer">
    <Container className='Container'>
        <Row className='align-items-center'>
          <div className="foot_wrap">
          <Col lg='4' md='6' className='first_side'>
                <div className="Logos_top">
                  <img src={Getfund_logo} alt="" />
                  <img src={NSA} alt="" />
                  <div className="slogan">
                  Supporting the delivery of quality
                  of education in Ghana
                  </div>

                </div>
            </Col>
            <Col lg='4' md='6' className='middle_side'>
            <h2>Explore</h2>
            <div className="footer_links_1">
               <ul className="footer_list">
                {first_row_links.map((item, index) => (
                  <li className="footer_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav_active' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="footer_links_2">
               <ul className="footer_list">
                {second_row_links.map((item, index) => (
                  <li className="footer_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav_active' : '')}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
              </div>

              
            </div>
            </Col>
            <Col lg='4' md='6' className='last_side'>

            <h2>Contact Us</h2>

            <div className="contact_us_cont"> <p className=''> 
              No. 42, 4th Close, Airport Res. Area, Accra
            </p>

            <p>+233 544 323 020 </p>
           <p> info@getfund.gov.gh</p>
</div>


           

            </Col>
          </div>
            
        </Row>

    </Container>
     

  </footer>
}

export default Footer