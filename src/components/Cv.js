import React from 'react';
import {motion} from 'framer-motion';

const About = () => {
    return (
        <div className = "about">
            <h1>About</h1>

            <motion.div className="about-info"
             initial = {{translateY : -100 , opacity : 0, translateX : '-50%'}}
            animate = {{translateY : 0 ,opacity : 1 , translateX : '-50%'}}
            transition = {{type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.5}}
            >
                <h2>Hey,</h2> 
                <h2>I'm Umesh 🙋‍♂</h2>
               <p> I'm currently pursuing Bachelor Degree of Engineering in Information Technology at Thadomal Shahani Engineering College and will graduate in 2020 👨‍🎓.</p>

               <p>
                   I have worked on many web development projects since the beginining of my egineering. I love designing websites ❤️, My 
                   contribution in any project is designing the structure and layout in a user friendly manner. I am always
                   excited in to learn new technologies which improves user interface.
                   Till now I have participated
                   in three hackathons (ByteCamp'19 , Codecell'19 , TSEC Hackathon'19). In all the hackathons, I have helped
                   my teams by desgining and creating user interface in 24 hours.
                   I'm known to technologies such as <span className = "about-lang"> HTML, CSS, JavaScript, jQuery, React, Figma, Git, php, SQL, Python</span> and learning many more 🤘. 
                   Other than technical knowledge I love playing football ⚽️ and love to paint 👨‍🎨 things out of my imagination.
               </p>
               
                <p className = "about-resume"> <a href="https://filenotepad.com///UserUploadFolder/umeshjain_resume//UmeshJain_Resume.pdf"  target= "_blank" rel="noopener noreferrer">here download resume 😁</a></p>

            </motion.div>
        </div>
    )
}

export default About;
