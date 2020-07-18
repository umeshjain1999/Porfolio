import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Profile} from './icons-svg/profile.svg';
import {ReactComponent as Project} from './icons-svg/project.svg';
import {ReactComponent as About} from './icons-svg/about.svg';
import {ReactComponent as Contact} from './icons-svg/contact.svg';
import {motion} from 'framer-motion';

function Nav() {

  return (
  <motion.div

  >
    <Navbar>

          <Link to = "/">
              <Navitem icon = {<Profile/>}/>
          </Link>
          <Link to = "/project">
              <Navitem icon = {<Project/>}/>
          </Link>
          <Link to = "/about">
              <Navitem icon = {<About/>}/>
          </Link>
          <Link to = "/contact">
              <Navitem icon = {<Contact/>}/>
          </Link>

    
    
    </Navbar>
  </motion.div>
  );
}

function Navbar(props) {
  return (
    <nav className = "navbar">
      <ul className = "navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}


function Navitem(props) { 
  return (
      <li className = "navitem">
          <div className = "icon-button" >
            {props.icon}
          </div>
          
      </li>
         
  );
}




export default Nav;
