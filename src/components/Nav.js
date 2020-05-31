import React from 'react';
import {Link} from 'react-router-dom';



function Nav() {

  return (
  <Navbar>

  <Link to = "/">
  <Navitem icon = "👨‍🎓"/>
  </Link>
  <Link to = "/about">
  <Navitem icon = "💯"/>
  </Link>
  <Link to = "/project">
  <Navitem icon = "⚙️"/>
</Link>
<Link to = "/contact">
<Navitem icon = "☎️"/>
</Link>

   
  
  </Navbar>
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
