import React from 'react';
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as Github} from '../icons/github.svg';

const Contact = () => {
    return (
        <div className = "contact">
            <div className = "contact-info">
                <div className="contact-email">
                    <p> <span>📧</span>ujain2601@gmail.com</p>
                </div>

                <div className="contact-mobile">
                    <p><span>☎️</span> +917045577741</p>
                </div>

                <div className = "contact-links">
                    <a href="https://www.linkedin.com/in/umesh-jain-50958a153/" target = "_blank">
                        <Linkedin/>
                    </a>
                    <a href="https://github.com/umeshjain1999" target = "_blank">
                        <Github/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
