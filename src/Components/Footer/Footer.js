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
            <h2>Contact Us</h2>
            <div className='name-columns'>
              <div className='left-names'>
                <div className='contact-info'>
                  <h4>Billy Frey</h4>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/ivonne-hernandez'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
                <div className='contact-info'>
                  <h4>Christian Valesares</h4>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/Markus-Xavier'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
              </div>
                <div className='contact-info'>
                  <h4>David Tran</h4>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/david-tran7/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/isleofyou'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
              <div className='right-names'>
                <div className='contact-info'>
                  <h4>Didi Dodson</h4>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/Markus-Xavier'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
                </div>
                <div className='contact-info'>
                  <h4>Tony Hsu</h4>
                  <a className='linked-in-icon' href={'https://www.linkedin.com/in/markus-rossio/'} target={'blank'}><AiIcons.AiOutlineLinkedin /></a>
                  <a className='contact-icons' href={'https://github.com/Markus-Xavier'} target={'blank'}><AiIcons.AiOutlineGithub /></a>
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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Footer;
