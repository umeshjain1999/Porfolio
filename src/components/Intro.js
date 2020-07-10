import React from 'react'
import profile from './profile.jpeg';
import {Link} from 'react-router-dom';

const Intro = () => {
    return (
        <div className = "intro">
           <div className = "profile">
               <div className = "profile-image">
               <img  src= {profile} alt="Profile" />
               </div>
               <div className="profile-details">
                <p className = "profile-name">Umesh Jain</p>
                <p className = "profile-skills">CSS / JavaScript / React</p>
                <Link to ="/project"><div className = "profile-contact">
                    
                    Check out my work 💪
                    
                </div>
                </Link>
            </div>
               </div>

          

        </div>
    )
}

export default Intro;