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
            <iframe src="https://drive.google.com/file/d/1SytBNZLdvhIQuS_UYa0EZ1WkpboNh4K7/preview" className="resume" allow="autoplay"></iframe>
                <a href={require('../../assets/images/ChrisZichkoResume.pdf')} download={"ChrisZichkoResume"}>
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