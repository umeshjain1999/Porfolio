import React from 'react';

const Card = (props) => {
    return (
        <div>
                 <div className="project-mumbai app">
                                <a href= {props.project.link} target = "_blank" rel="noopener noreferrer">
                                    <div className="project-image">
                                
                                        <div className = "text">{props.project.title}</div>
                                    
                                    </div> 
                                    <p>{props.project.info}</p>
                                </a>
                </div>
        </div>
    );
}

export default Card;