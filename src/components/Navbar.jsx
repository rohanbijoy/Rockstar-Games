import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiUserLine } from 'react-icons/ri';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return(
  <div style={{ backgroundColor: 'rgb(2,2,2)', padding: '0 1%' }} className='d-flex align-items-center'>
      <GiHamburgerMenu style={{ marginRight: "auto" }} fontSize={30} color='white' />
      <Navbar.Toggle/>
        <img style={{ width: "95px", padding: '1%' }} src='https://cdn.vox-cdn.com/thumbor/Xd6Njd2MVQ0P2U3LwmQ8DMF89SY=/0x0:1280x720/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/32997737/rockstar-games-logo_1280.0.jpg' alt='logo' />
        <RiUserLine style={{marginLeft: "auto"}} fontSize={30} color='white' />
  </div>);
};

export default NavBar;
