import React, { useState } from "react";

function Resume() {
    const mySkills = [
        "MongoDB/Mongoose.js", 
        "Express.js",
        "React",
        "Node.js",
        "Python3+",
        "Kivy 2.0+",
        "JavaScript ES6+",
        "CSS3",
        "HTML5",
        "MySQL/Sequelize.js",
        "Handlebars.js",
        "Jest",
        "Git",
        "Heroku"
    ];

    return (
        <section className="resume-section">
            <embed src={require('../../assets/images/Resume+Chris+Zichko.pdf')} className="resume" />
            <ul className="skills">
                {mySkills.map((skill) => (
                    <li>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resume;