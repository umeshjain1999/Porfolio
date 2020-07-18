import React from 'react'
import profile from './profile.jpeg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Intro = () => {
    return (
        <div className = "intro">
           <motion.div className = "profile"
            initial = {{y : -100 , opacity : 0}}
            animate = {{y : 0 ,opacity : 1}}
            transition = {{type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.5}}
           >
               <div className = "profile-image">
                    <img  src= {profile} alt="Profile" />
               </div>
               <div className="profile-details">
                    <p className = "profile-name">Umesh Jain</p>
                    <p className = "profile-skills">CSS / JavaScript / React</p>
                    
                    <motion.div className = 'profile-project'
                    whileHover = {{scale : 1.05 , fontStyle: 'italic'  }}
                    transition = {{type : 'spring' , stiffness : 300}}
                    >
                        <Link to ="/project">

                            
                                Check out my work 💪
                            
                        </Link>
                    </motion.div>
                </div>
                </motion.div>

          

        </div>
    )
}

export default Intro;