import React from "react";
import ProfilePic from "../../assets/images/ProfilePic.jpg";

function About() {
    return (
        <article className="about-article">
            <h1 className="about">All About Chris</h1>
            <div className="flex-row">
                <img className="profile-pic" src={`${ProfilePic}`} alt="Chris Zichko"></img>
                <p className="bio">
                    Passionate and proud Front-End Developer going on two years of experience,
                    while leveraging my previous experiences outside of the technology field in 
                    maintenance and military to help create a more efficient, captivating, and
                    simple user experience using Python 3+, JavaScript ES6+, CSS3, HTML5, SQL, 
                    GitHub, MySQL, and WordPress. I have on my own received a certificate in 
                    Scientific Computing with Python from FreeCodeCamp, and currently working 
                    on becoming a certified Full-Stack Web Developer through the University of
                    Central Florida and Data Analyst certified with FreeCodeCamp.        
                </p>
            </div>
        </article>
    );
};

export default About;
