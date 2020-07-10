import React from 'react';


const Project = () => {
    return (
        <div className = "project">
            <h1>Projects</h1>
            <div className="project-details">
                <div className="project-mumbai app">
                    <div className="project-image">
                    <a href="https://reactjs-todo-list-yo.netlify.app/" target = "_blank" rel="noopener noreferrer">
                        <div className = "text"><i>#todo</i></div>
                    </a>
                    </div>Todo task ✔️
                    </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://badjoke.netlify.app/" target = "_blank" rel="noopener noreferrer">
                    <div className = "text">Bad Joke 😆</div>
                </a>
                </div>Generate Random joke.
                </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://mumbai-tour.000webhostapp.com/HomePage.html" target = "_blank" rel="noopener noreferrer">
                    <div className = "text">Tourism 🌏</div>
                </a>
                </div>Mumbai Tourism 🚆
                </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://github.com/umeshjain1999/DebugThugs" target = "_blank" rel="noopener noreferrer">
                    <div className = "text">Emergency Services ⚠️</div>
                </a>
                </div>Made for situations such as flood,local riots,etc.
                </div>
                <div className="project-mumbai app">
                <div className="project-image">
                <a href="https://github.com/umeshjain1999/TSEC-NGO-based" target = "_blank" rel="noopener noreferrer">
                    <div className = "text">NGO for Childrens ✨</div>
                </a>
                </div> One step towards helping special 🐣
                </div>
            </div>
        </div>
    )
}

export default Project;
