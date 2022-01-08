import React, { useState } from "react";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'AnotherBudgetApp',
            url: 'https://anotherbudgetapp.herokuapp.com',
            description: `My very first Progressive Web Application! It uses MongoDB, Mongoose, and IndexedDB to allow you 
                        to download the application and track your budget!`,
        },
        {
            name: 'ZichkoTechBlog',
            url: 'https://zichkotechblog.herokuapp.com/',
            description: `Zichko Tech Blog is an application using MySQL, sequelize.js, express.js, express-handlebars, and bcrypt for allowing users to login to create and comment on blogs.`,
        },
        {
            name: 'THE_SoN_API',
            url: 'https://github.com/ZichKoding/THE_SoN_API',
            description: `THE_SoN_API stands for The Social Network API. With this API you are able to create users, thoughts (posts), 
                            reactions to a thought (replies), and a user can have a friend list. The database used is a NoSQL database called MongoDB, 
                            and I have used mongoose for all CRUD interactions with MongoDB.`,
        },
        {
            name: 'TuneItUp',
            url: 'https://zichkoding.github.io/TuneItUp',
            description: "A collaborative frontend project using javascript to fetch API's to bring you your favorite artist's songs and upcoming events!",
        },
        {
            name: 'ZNoteTaker',
            url: 'https://znotetaker.herokuapp.com',
            description: 'An application for storing your notes. This application is powered by Express.js and Node.js',
        },
        {
            name: 'ElevenEleven',
            url: 'https://murmuring-mesa-60919.herokuapp.com/',
            description: 'Collaborative effort to make a study application for students to connect and study with each other. Technologies used are Express.js, Sequelize, Bcrypt, and MySQL.',
        },
        
    ]);

    return (
        <article className="about-article">
            {projects.map((image) => (
                <section className="project-section" key={image.name}>
                    <a href={image.url}>
                        <h2 className="project-title">{image.name}</h2>
                    </a>
                    <div className="port-article">
                        <p className="bio">{image.description}</p>
                        <a href={image.url} target="_blank" rel="noreferrer">
                            <img 
                                src={require(`../../assets/images/${image.name}.jpg`)} 
                                alt={`Screenshot of ${image.name}`} 
                                className="project-photo" />
                        </a>
                    </div>
                </section>
            ))}
        </article>
    );
};

export default Portfolio;
