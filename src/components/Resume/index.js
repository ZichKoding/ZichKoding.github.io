import React from "react";

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
            <div className="download">
                <object data={require('../../assets/images/Resume+Chris+Zichko.pdf')} className="resume"></object>
                <a href={require('../../assets/images/Resume+Chris+Zichko.pdf')} download={"ChrisZichkoResume"}>
                    <button className="resume-button">Download Chris's Resume</button>
                </a>
            </div>
            <ul className="skills">
                {mySkills.map((skill) => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resume;