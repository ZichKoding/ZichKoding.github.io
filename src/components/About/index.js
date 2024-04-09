import React from "react";
import ProfilePic from "../../assets/images/ProfilePic.jpg";

function About() {

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
        <article className="about-article">
            <h1 className="about">All About Chris</h1>
            <div className="flex-row">
                <img className="profile-pic" src={ProfilePic} alt="Chris Zichko"></img>
                <div className="bio">
                    <p>
                        Hi! I'm Chris and I'm a passionate and proud Full-Stack Software Developer specializing in the MERN Stack, Python's Django framework, and Next.js framework!
                        <br />
                        <br />
                    </p>
                    <ul>
                        <li><span className="about">Frontend</span>: 3 years</li>
                        <li><span className="about">Backend</span>: 3 year</li>
                    </ul>
                    <p>
                        <br />
                        Software developer with a passion for innovation and a proven track record
                        of developing and delivering high-quality software solutions using a 
                        diverse range of technologies. Proficient in programming languages such 
                        as Python, C#, Deluge, VBScript, Node.js, Next.js, React.js, and TypeScript.
                        Experienced in working with cloud platforms like AWS (APIGateway, 
                        Lambda, S3, and SQS) and microservices architectures. Possesses expertise
                        in building and maintaining ETL pipelines and working with SQL (MySQL, 
                        PostgreSQL) and NoSQL (MongoDB) databases. Strong proficiency in
                        front-end and back-end web development using the MERN stack 
                        (MongoDB, Express.js, React.js, Node.js). Adept in version control using 
                        Git, GitHub, and GitHub Actions. Familiar with project management
                        methodologies such as Agile, Scrum, and Waterfall. Additional skills include API 
                        integration, ZohoCRM integration, WordPress development, consulting, 
                        and tutoring.
                    </p>
                    <br />
                    <p>
                        Below area list of my the skills that I feel confident using:
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
