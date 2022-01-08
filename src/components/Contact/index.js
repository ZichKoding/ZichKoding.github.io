import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', mesaage: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    // sync data from form
    function handleChange(e) {
        // validate email
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });            
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section className='contact-article'>
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit} action='mailto:chriszichkocoding@gmail.com'>
                <div className='col-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" defaultValue={name} className="form-input" onBlur={handleChange} name="name" />
                </div>
                <div className='col-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" defaultValue={email} className="form-input" onBlur={handleChange} name="email" />
                </div>
                <div className='col-message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" defaultValue={message} className="form-input" onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' className='contact-button'><a href='mailto:chriszichkocoding@gmail.com'>Submit</a></button>
            </form>
        </section>
    );
}

export default ContactForm;