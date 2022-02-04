import React, { useState } from "react";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Versa-Train',
            url: 'https://crispy-gigglers.herokuapp.com/',
            gurl: 'https://github.com/oldgraybuzzard/crispy-giggle',
            description: `A MERN stack application using GraphQL for Employers to create and host their training material for their employees to stay up to date with the training required in the job place. 
            Employers create the employee profiles and give the employees their login and password and the employees once logged in have their own seperate dashboard.`
        },
        {
            name: 'ShopShop',
            url: 'https://shopshopbyzichkoding.herokuapp.com',
            gurl: 'https://github.com/ZichKoding/shop-shop',
            description: `A PWA ecommerce website for a user to login, browse, and buy items. A PWA stands for Progressive Web Application,
             meaning this application can be added to your home screen as it's own standalone app with offline functionality! `
        },
        {
            name: 'DeepThoughts',
            url: 'https://deepthoughts-zichkoding.herokuapp.com',
            gurl: 'https://github.com/ZichKoding/DeepThoughts',
            description: `A full MERN (MongoDB, Express.js, React.js, Node.js) social media application to share thoughts, react to thoughts, and add friends! This application also is using GraphQL
            and Apollo Server to enhance performance and user experience.`
        },
        {
            name: 'AnotherBudgetApp',
            url: 'https://anotherbudgetapp.herokuapp.com',
            gurl: 'https://github.com/ZichKoding/AnotherBudgetApp',
            description: `My very first Progressive Web Application! It uses MongoDB, Mongoose, and IndexedDB to allow you 
                        to download the application and track your budget!`,
        },
        {
            name: 'ZichkoTechBlog',
            url: 'https://zichkotechblog.herokuapp.com/',
            gurl: 'https://github.com/ZichKoding/ZichkoTechBlog',
            description: `Zichko Tech Blog is an application using MySQL, sequelize.js, express.js, express-handlebars, and bcrypt for allowing users to login to create and comment on blogs.`,
        },
        {
            name: 'THE_SoN_API',
            url: 'https://github.com/ZichKoding/THE_SoN_API',
            gurl: 'https://github.com/ZichKoding/THE_SoN_API',
            description: `THE_SoN_API stands for The Social Network API. With this API you are able to create users, thoughts (posts), 
                            reactions to a thought (replies), and a user can have a friend list. The database used is a NoSQL database called MongoDB, 
                            and I have used mongoose for all CRUD interactions with MongoDB.`,
        },
        {
            name: 'TuneItUp',
            url: 'https://zichkoding.github.io/TuneItUp',
            gurl: 'https://github.com/ZichKoding/TuneItUp',
            description: "A collaborative frontend project using javascript to fetch API's to bring you your favorite artist's songs and upcoming events!",
        },
        {
            name: 'ZNoteTaker',
            url: 'https://znotetaker.herokuapp.com',
            gurl: 'https://github.com/ZichKoding/NoteTaker',
            description: 'An application for storing your notes. This application is powered by Express.js and Node.js',
        }
    ]);

    return (
        <article className="about-article">
            {projects.map((image) => (
                <section className="project-section" key={image.name}>
                    <a href={image.url} target="_blank" rel="noreferrer">
                        <h2 className="project-title">{image.name}</h2>
                    </a>
                    <div className="port-article">
                        <p className="bio">{image.description}</p>
                        <div className="div-project">
                            <img 
                                src={require(`../../assets/images/${image.name}.jpg`)} 
                                alt={`Screenshot of ${image.name}`} 
                                className="project-photo" />

                            <ul className='port-flex-row'>
                                <li>
                                    <a className='li-footerdesign' href={image.gurl} target="_blank" rel="noreferrer"><img className="github-live" src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
                                </li>
                                <li>
                                    <a className='li-footerdesign' href={image.url} target="_blank" rel="noreferrer"><img className='github-live' src="https://img.icons8.com/ios-filled/50/000000/view-file.png"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            ))}
        </article>
    );
};

export default Portfolio;
