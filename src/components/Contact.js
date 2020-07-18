import React from 'react';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Github} from '../icons/github.svg';
import {motion} from 'framer-motion';

const Contact = () => {
    return (
        <motion.div className = "contact"
        initial = {{opacity : 0}}
        animate = {{opacity : 1}}
        transition = {{delay : 0.2 , duration : 0.5}}
       
        >
            <motion.div className = "contact-info"
            initial = {{translateY : -100 , opacity : 0}}
            animate = {{translateY : 0 ,opacity : 1 }}
            transition = {{ type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.5}}

             >
                <div className="contact-email">
                    <p>
                        <span>
                            <svg style = {{width : "20px", height : "20px",position: 'relative',top : "4px"}} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </span>ujain2601@gmail.com
                    </p>
                </div>

                <div className="contact-mobile">
                    <p>
                        <span>
                            <svg style = {{width : "20px", height : "20px",position: 'relative',top : "3px"}} id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke="#000" strokeLinecap="round"  strokeWidth="2">
                                    <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" />
                                    <circle cx="16" cy="21" r="4" />
                            </svg>
                        </span> +917045577741
                    </p>
                </div>

                <div className = "contact-links">
                    <a href="https://www.linkedin.com/in/umesh-jain-50958a153/" target = "_blank" rel="noopener noreferrer">
                        <Linkedin/>
                    </a>
                    <a href="https://github.com/umeshjain1999" target = "_blank" rel="noopener noreferrer">
                        <Github/>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Contact;
