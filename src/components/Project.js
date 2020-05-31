import React from 'react';
import todo from './todo.PNG';
import mumbai from './mumbai.PNG';

const Project = () => {
    return (
        <div className = "project">
            <h1>Projects</h1>
            <div className="project-details">
                <div className="project-todo app">
                    <div className="project-image">
                    <a href="https://reactjs-todo-list-yo.netlify.app/" target = "_blank"><img src= {todo} alt="Todo" /></a>
                    </div> Todo task ✔️
                </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://mumbai-tour.000webhostapp.com/HomePage.html" target = "_blank"><img src= {mumbai} alt="Mumbai" /></a>
                </div>Mumbai Tourism 🚆
                </div>

                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://github.com/umeshjain1999/DebugThugs">
                    <div className = "project-emergency text">Emergency Services ⚠️</div>
                </a>
                </div>Made for situations such as flood,local riots,etc.
                </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://github.com/umeshjain1999/TSEC-NGO-based">
                    <div className = "project-ngo text">NGO for Childrens ✨</div>
                </a>
                </div> One step towards helping special 🐣
                </div>
            </div>
        </div>
    )
}

export default Project;
