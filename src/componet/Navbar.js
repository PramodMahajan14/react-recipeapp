import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import Tittle from './pages/tuttle';
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
       
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} /> <h4 style={{marginLeft:"1.90rem",marginBottom:'3rem'}}><Tittle/></h4>
           
          </Link>
          
          
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>

                </li>
              );
            })}


            <div class="ui  list">
  <div class="item">
  
  <img class="ui avatar circular image" src="https://avatars.githubusercontent.com/u/87180411?v=4"/>
    <div class="content">
     Pramod Mahajan
    </div>
  </div>
  <div class="item">
    <i class="marker icon"></i>
    <div class="content">
      Pune,Maharashtra India
    </div>
  </div>
  <div class="item">
    <i class="mail icon"></i>
    <div class="content">
      <a href="2085pramodmahajan@gmail.com">2085pramodmahajan@gmail.com</a>
    </div>
  </div>
  <div class="item">
    <i class="linkify icon"></i>
    <div class="content">
      <a href="https://github.com/pramodmahajan14">https://github.com/pramodmahajan</a>
    </div>
  </div>
</div>

          </ul>
        </nav>
    </>
  );
}

export default Navbar;