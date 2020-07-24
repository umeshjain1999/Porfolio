import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Profile} from './icons-svg/profile.svg';
import {ReactComponent as Project} from './icons-svg/project.svg';
import {ReactComponent as About} from './icons-svg/about.svg';
import {ReactComponent as Contact} from './icons-svg/contact.svg';
import {motion} from 'framer-motion';

function Nav() {

  return (
  <div>
    <Navbar>

          <Link to = "/">
              <motion.div
              initial = {{y : -100 , opacity : 0}}
              animate = {{y : 0 , opacity : 1}}
              transition = {{type : 'spring' , delay : 0.1, duration : 0.1 }}
              ><Navitem icon = {<Profile/>}/></motion.div>
          </Link>
          <Link to = "/project">
              <motion.div
              initial = {{y : -100 , opacity : 0}}
              animate = {{y : 0 , opacity : 1}}
              transition = {{type : 'spring' , delay : 0.2, duration : 0.1 }}
              >
              <Navitem icon = {<Project/>}/></motion.div>
          </Link>
          <Link to = "/about">
          <motion.div
              initial = {{y : -100 , opacity : 0}}
              animate = {{y : 0 , opacity : 1}}
              transition = {{type : 'spring' , delay : 0.3, duration : 0.1 }}
              >
              <Navitem icon = {<About/>}/></motion.div>
          </Link>
          <Link to = "/contact">
          <motion.div
              initial = {{y : -100 , opacity : 0}}
              animate = {{y : 0 , opacity : 1}}
              transition = {{type : 'spring' , delay : 0.4, duration : 0.1 }}
              >
              <Navitem icon = {<Contact/>}/></motion.div>
          </Link>

    
    
    </Navbar>
  </div>
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
