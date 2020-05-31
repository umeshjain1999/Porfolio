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
                <Link to ="/contact"><div className = "profile-contact">
                    
                    CONTACT ME
                    
                </div>
                </Link>
               {/* <p><span>📧</span> ujain2601@gmail.com</p>
                <p><span>🤙</span> +917045577741</p>*/}
            </div>
               </div>

          

        </div>
    )
}

export default Intro;