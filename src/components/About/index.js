import React from "react";
import ProfilePic from "../../assets/images/ProfilePic.jpeg";

function About() {

    const mySkills = [
        "MongoDB/Mongoose.js", 
        "Express.js",
        "React.js",
        "Node.js",
        "Progressive Web Applications (PWA's)",
        "Python3+",
        "Kivy 2.0+",
        "JavaScript ES6+",
        "CSS3",
        "HTML5",
        "MySQL/Sequelize.js",
        "Handlebars.js",
        "Webpack.js",
        "Jest",
        "Git",
        "Heroku"
    ];

    return (
        <article className="about-article">
            <h1 className="about">All About Chris</h1>
            <div className="flex-row">
                <img className="profile-pic" src={ProfilePic} alt="Chris Zichko"></img>
                <div className="bio">
                    <p>
                        Hi! I'm Chris and I'm a passionate and proud Full-Stack Software Developer specializing in the MERN stack!
                        <br />
                        <br />
                    </p>
                    <ul>
                        <li><span className="about">Frontend</span>: 2 years</li>
                        <li><span className="about">Backend</span>: 1 year</li>
                    </ul>
                    <p>
                        <br />
                        My military and maintenance background help me create and efficient, captivating, and simple user experience. 
                        I have a certificate in Scientific Computing with Python from FreeCodeCamp, and currently working on becoming 
                        a certified Full-Stack Software Developer through the University of Central Florida.
                    </p>
                    <br />
                    <p>
                        Below area few of my the skills that I can expertly use:
                        <br />
                        <br />
                    </p>
                    <ul>
                        {mySkills.map((skill) => (
                            <li key={skill}>
                                <span className="myskill">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;
