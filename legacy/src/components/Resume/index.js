import React from "react";

function Resume() {
    const mySkills = [
        "MongoDB/Mongoose.js", 
        "Express.js",
        "React",
        "Node.js",
        "Progressive Web Apps (PWA's)",
        "GraphQL",
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
        <section className="resume-section">
            <div className="download">
            <iframe src="https://drive.google.com/file/d/1tw9unvaz4qLNeB7NlnRhwSpbZ9EB1dG_/preview" className="resume" allow="autoplay"></iframe>
                <a href={require('../../assets/images/Chris Zichko Resume-converted.pdf')} download={"ChrisZichkoResume"}>
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