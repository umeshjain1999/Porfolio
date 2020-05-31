import React from 'react';


const About = () => {
    return (
        <div className = "about">
            <h1>About</h1>

            <div className="about-info">
                <h2>Hi,</h2> 
                <h2>I'm Umesh 🙋‍♂</h2>
               <p> I'm currently pursuing Bachelor Degree of Engineering in Information Technology 💻 at Thadomal Shahani Engineering College 🏫 and will graduate in 2020 👨‍🎓.</p>

               <p>
                   I have worked on many web development projects since the beginining of my egineering. I love designing websites ❤️, My 
                   contribution in any project is designing the structure and layout in a user friendly manner. I am always
                   excited 🌻 in to learn new technologies which improves user interface.
                   Till now I have participated
                   in three hackathons (ByteCamp'19 , Codecell'19 , TSEC Hackathon'19) ✊. In all the hackathons, I have helped
                   my teams by desgining and creating user interface in 24 hours.
                   I'm known to technologies such as <span className = "about-lang"> HTML, JavaScript, CSS, React, php, SQL, Python</span> and learning many more 🤘. 
                   Other than technical knowledge I love playing football ⚽️ and love to paint 👨‍🎨 things out of my imagination.
               </p>
               
                <p className = "about-resume"> <a href="http://filenotepad.com///UserUploadFolder/umeshjain_resume//umeshjain_resume.pdf"  target= "_blank">here download resume 😁</a></p>

            </div>
        </div>
    )
}

export default About;
