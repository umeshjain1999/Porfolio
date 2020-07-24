import React from 'react'
import profile from './profile.jpeg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';


const parentVariant = {
    hidden : {
        translateY : -100 , 
        opacity : 0
    },
    visible : {
        translateY : 0 ,
        opacity : 1,
        transition : { type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.2 , 
        mass : 0.4,
        damping : 5,
        when : 'beforeChildren',
        }
    },
}

const childVariant = {
    initial : {
        opacity : 0
    },
    animate : {
        opacity : 1,
        transition : {delay : 1 , duration : 0.5}
    },
     hover : {
         opacity : 1,
         scale : 1.05 , 
         fontStyle: 'italic' ,
         transition : {type : 'spring' , stiffness : 300}
     }
                    
}


const Intro = () => {
    return (
        <div className = "intro">
           <motion.div className = "profile"
            variants = {parentVariant}
            initial = 'hidden'
            animate = 'visible'
           >
               <div className = "profile-image">
                    <img  src= {profile} alt="Profile" />
               </div>
               <div className="profile-details">
                    <p className = "profile-name">Umesh Jain</p>
                    <p className = "profile-skills">CSS / JavaScript / React</p>
                    
                    <motion.div className = 'profile-project'
                    variants = {childVariant}
                    initial = 'initial'
                    animate = 'animate'
                    whileHover = 'hover'
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