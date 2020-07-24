import React from 'react';
import {motion} from 'framer-motion';

const parentVariant = {
    hidden : {
        translateY : -100 , 
        opacity : 0, 
        translateX : '-50%'
    },
    visible : {
        translateY : 0 ,
        opacity : 1, 
        translateX : '-50%',
        transition : { 
            type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.5,
          
        }
    },


}

const Project = () => {
    return (
        <div className = "project">
            <h1>Projects</h1>
            <motion.div className="project-details"
            variants = {parentVariant}
            initial = 'hidden'
            animate = 'visible'
            >
                <div className="project-mumbai app">
                    <a href="https://reactjs-todo-list-yo.netlify.app/" target = "_blank" rel="noopener noreferrer">
                        <div className="project-image">
                    
                            <div className = "text"><i>#todo</i></div>
                        
                        </div> 
                        <p>Todo task ✔️</p>
                    </a>
                </div>
                <div className="project-mumbai app">
                    <a href="https://badjoke.netlify.app/" target = "_blank" rel="noopener noreferrer">
                        <div className="project-image">
                        
                            <div className = "text">Bad Joke 😆</div>
                        
                        </div> 
                        <p>Generate Random joke.</p>
                    </a>
                </div>
                <div className="project-mumbai app">
                    <a href="https://mumbai-tour.000webhostapp.com/HomePage.html" target = "_blank" rel="noopener noreferrer">
                        <div className="project-image">
                        
                            <div className = "text">Tourism 🌏</div>
                        
                        </div>
                        <p>Mumbai Tourism 🚆</p>
                    </a>
                </div>
                <div className="project-mumbai app">
                    <a href="https://github.com/umeshjain1999/DebugThugs" target = "_blank" rel="noopener noreferrer">
                        <div className="project-image">
                        
                            <div className = "text">Emergency Services ⚠️</div>
                        
                        </div> 
                        <p>Made for situations such as flood,local riots,etc.</p>
                    </a>
                </div>
                <div className="project-mumbai app">
                    <a href="https://github.com/umeshjain1999/TSEC-NGO-based" target = "_blank" rel="noopener noreferrer">
                        <div className="project-image">
                        
                            <div className = "text">NGO for Childrens ✨</div>
                        
                        </div> 
                        <p>One step towards helping special 🐣</p>
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Project;
