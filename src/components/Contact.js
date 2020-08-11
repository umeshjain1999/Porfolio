import React , {useState}from 'react';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Github} from '../icons/github.svg';
import {motion} from 'framer-motion';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const parentVariant = {
    hidden : {
        translateY : -100 , 
        opacity : 0
    },
    visible : {
        translateY : 0 ,
        opacity : 1,
        transition : { type : 'spring',stiffness:120 , delay : 0.3 , duration : 0.5,
       }
    },

    hover : {
        scale : 1.05,
        transition : {type : 'spring', duration : 0.01}
    },
}

const thankyouMsg = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 0.5,
        transition : {
            delay:1
        }
    }

}
const Contact = () => {
    const [copy, setcopy] = useState(false);
    if(copy) {
        setTimeout(() => {
            setcopy(false);
        }, 700);
    }
    return (
        <div className = "contact">
            <motion.div className = "contact-info"
            variants = {parentVariant}
            initial = 'hidden'
            animate = 'visible'

             >
               <div className="container">
                           <motion.div className="contact-email"
                            > 
                              <CopyToClipboard text = {'ujain2601@gmail.com'} onCopy = {()=> setcopy(!copy)}>
                                  <p>
                                    {/* <span>
                                        <svg style = {{width : "20px", height : "20px",position: 'relative',top : "4px"}} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </span> */}
                                    ujain2601@gmail.com
                                </p>
                              </CopyToClipboard>
                             
                            </motion.div>

                            <motion.div className="contact-linkedin"
                            
                            >
                                <p>
                                
                                <a href="https://www.linkedin.com/in/umesh-jain-50958a153/" target = "_blank" rel="noopener noreferrer">
                                    Linkedin
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div className="contact-github"
                            >
                                <p>
                                <a href="https://github.com/umeshjain1999" target = "_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                                </p>
                            </motion.div>
               </div>

                {/* <div className="contact-mobile">
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
                </div> */}
            </motion.div>
             {copy && <p style = {{
                                fontSize : '15px',
                                color : 'green',
                                position : 'absolute',
                                bottom : '130px',
                            }}>Copied!</p>}
            <motion.p className = 'contact-thankyou'
            variants = {thankyouMsg}
            initial = 'hidden'
            animate = 'visible'
            >
            Thank you for your time :)
            </motion.p>
        </div>
    )
}

export default Contact;
