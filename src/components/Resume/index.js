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
            <iframe src="https://drive.google.com/file/d/1GP0QMYrBV24I7W_rVr6Unz545d6Fo53-/preview" allow="autoplay" className="resume"></iframe>
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