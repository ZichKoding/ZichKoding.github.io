import React from "react";
import ProfilePic from "../../assets/images/ProfilePic.jpeg";

function About() {
    const bio = `Passionate and proud Full-Stack Software Developer going on two years of experience 
    in Frontend and one year experience with Backend, while leveraging my previous experiences 
    outside of the technology field in maintenance and military to help create a more efficient, 
    captivating, and simple user experience using Python 3+, JavaScript ES6+, Node.js, Sequelize, 
    Express.js, Handlebars, Jest, CSS3, Bootstrap, jQuery, HTML5, GitHub, Heroku, MySQL, Kivy 2.0+, 
    and WordPress. I have on my own received a certificate in Scientific Computing with Python from 
    FreeCodeCamp, and currently working on becoming a certified Full-Stack Software Developer through 
    the University of Central Florida.`

    return (
        <article className="about-article">
            <h1 className="about">All About Chris</h1>
            <div className="flex-row">
                <img className="profile-pic" src={ProfilePic} alt="Chris Zichko"></img>
                <p className="bio">
                    {bio}
                </p>
            </div>
        </article>
    );
};

export default About;
