import React from 'react';


const Project = () => {
    return (
        <div className = "project">
            <h1>Projects</h1>
            <div className="project-details">
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
            </div>
        </div>
    )
}

export default Project;
