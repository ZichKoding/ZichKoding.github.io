import React from "react";

function Resume() {
    const mySkills = [
        "MongoDB/Mongoose.js", 
        "Express.js",
        "React.js",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Progressive Web Applications (PWA's)",
        "GraphQL",
        "Python3+",
        "Pandas",
        "Pyautogui",
        "Django",
        "Kivy 2.0+",
        "JavaScript ES6+",
        "CSS3",
        "HTML5",
        "MySQL/Sequelize.js",
        "PostgreSQL",
        "Handlebars.js",
        "Webpack.js",
        "Jest",
        "Git",
        "GitHub",
        "GitHub Actions",
        "Heroku",
        "AWS (API Gateway, Lambda, S3, and SQS)",
        "Microservices",
        "Vercel",
        "CMS",
        "ETL Pipelines",
        "WordPress",
        "Agile",
        "Scrum",
        "Waterfall",
        "C#",
        "VBScript",
        "Deluge"
    ];

    return (
        <section className="resume-section">
            <div className="download">
            <embed src={require('../../assets/images/Chris Zichko Resume.pdf')} className="resume"></embed>
                <a href={require('../../assets/images/Chris Zichko Resume.pdf')} download={"ChrisZichkoResume"}>
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