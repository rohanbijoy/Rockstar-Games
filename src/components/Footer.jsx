import React from 'react';
import { FaFacebook, FaYoutube, FaTwitch, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return <div className='text-white px-5 w-100' style={{backgroundColor: 'rgb(0,0,0)', height: "60vh"}}>
      <div className='d-flex justify-content-between' style={{paddingTop: "6%", fontSize: "22px"}}>
          <div className='d-flex'>
              <div className='mx-3'>Contact</div>
              <div className='mx-3'>Careers</div>
              <div className='mx-3'>Subscribe</div>
          </div>
          <div className='mx-4'>English</div>
      </div>
      <div className='d-flex justify-content-between px-2' style={{paddingTop: "5%"}}>
          <div className='d-flex' style={{color: "rgb(147,147,147)", fontSize: "15px", paddingTop: '1.5%'}}>
              <div className='mx-2'>Corporate</div>
              <div className='mx-2'>Privacy</div>
              <div className='mx-2'>Cookies</div>
              <div className='mx-2'>Legal</div>
              <div className='mx-2'>Do Not Sell My Personal Information</div>
          </div>
          <div className='d-flex'>
              <div className='mx-3' style={{fontSize: "30px"}}><FaTwitch/></div>
              <div className='mx-3' style={{fontSize: "30px"}}><FaInstagram/></div>
              <div className='mx-3' style={{fontSize: "30px"}}><FaTwitter/></div>
              <div className='mx-3' style={{fontSize: "30px"}}><FaYoutube/></div>
              <div className='mx-3' style={{fontSize: "30px"}}><FaFacebook/></div>
          </div>
      </div>
      <div className='d-flex justify-content-evenly align-items-center' style={{paddingTop: "9%", fontSize: "16px"}}>
          <div>Rockstar Games</div>
          <div className='d-flex'>
              <div className='mx-2'>New York</div>
              <div className='mx-2'>London</div>
              <div className='mx-2'>Paris</div>
              <div className='mx-2'>Bogotá</div>
          </div>
          <div>MCMXCVIII</div>
      </div>
  </div>;
};

export default Footer;
