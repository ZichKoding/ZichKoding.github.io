import React, { useState } from "react";

function Resume() {
    return (
        <section className="resume-section">
            <embed src={require('../../assets/images/Resume+Chris+Zichko.pdf')} className="resume" />
            <ul className="skills">
                <li>
                    MERN
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    Python
                </li>
                <li>
                    Handlebars
                </li>
                <li>
                    HTML5
                </li>
                <li>
                    CSS3
                </li>
                <li>
                    Git
                </li>
                <li>
                    Heroku
                </li>
            </ul>
        </section>
    );
};

export default Resume;