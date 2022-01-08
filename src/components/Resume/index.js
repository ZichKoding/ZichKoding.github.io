import React, { useState } from "react";

function Resume() {
    return (
        <section className="resume-section">
            <embed src={require('../../assets/images/Resume+Chris+Zichko.pdf')} className="resume" />
        </section>
    );
};

export default Resume;