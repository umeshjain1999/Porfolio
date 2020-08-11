import React  from 'react';
import {motion} from 'framer-motion';
import Card from './Card';

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
 const projectDetails = [
        {
            title : "#todo",
            info :  'Todo task ✔️' ,
            link : 'https://reactjs-todo-list-yo.netlify.app/',   
        },
        {
            title : "Bad Joke 😆",
            info :  'Generate Random joke.',
            link : 'https://badjoke.netlify.app/',    
        },
        {
            title : "Tourism 🌏",
            info :  'Mumbai Tourism 🚆',
            link : 'https://mumbai-tour.000webhostapp.com/HomePage.html',    
        },
        {
            title : "Emergency Services ⚠️",
            info :  'Made for situations such as flood,local riots,etc.',
            link : 'https://github.com/umeshjain1999/DebugThugs',    
        },
         {
            title : "NGO for Childrens ✨",
            info :  'One step towards helping special 🐣',
            link : 'https://github.com/umeshjain1999/TSEC-NGO-based',    
        },
    ]
    // const [projectDetails, setprojectDetails] = useState(initialState)
    return (
        <div className = "project">
            <h1>Projects</h1>
            <motion.div className="project-details"
                variants = {parentVariant}
                initial = 'hidden'
                animate = 'visible'
            >

                  {  projectDetails.map((project , index)=> (
                            <Card project = {project} key = {index}/>
                    ))}
                    
                           
            </motion.div>
        </div>
    )
}

export default Project;
