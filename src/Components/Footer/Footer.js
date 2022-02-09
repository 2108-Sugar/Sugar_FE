import React from 'react';
import './Footer.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h1>Contact Us</h1>
            <div className='name-columns'>
              <div className='left-names'>
                <div className='contact-info'>
                  <h3>Billy Frey</h3>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/william-frey/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/bfrey08'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
                <div className='contact-info'>
                  <h3>Christian Valesares</h3>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/christian-valesares/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/cvalesares'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
              </div>
                <div className='contact-info'>
                  <h3>David Tran</h3>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/david-tran7/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/isleofyou'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
              <div className='right-names'>
                <div className='contact-info'>
                  <h3>Didi Dodson</h3>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/didi-dodson'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/DidiDodson'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
                <div className='contact-info'>
                  <h3>Tony Hsu</h3>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/tonydhsu/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/tonydhsu'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
              </div>           
            </div>
          </div>
        </div>
      </div>
      <section className='application-name'>
        <div className='application-name-wrap'>
          <small className='copyright'>Sugar © 2022</small>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Footer;
