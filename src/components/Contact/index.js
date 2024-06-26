import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const form = useRef();

    const [formState, setFormState] = useState({ name: '', email: '', mesaage: '' });
    const [loading, setLoading] = useState(false); // Track loading state

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const _template_id = 'template_z1nqxfp';
    const _public_key = 'uutmaLg-i6JAMSGRu';
    const _service_id = 'service_zrkv6qj';

    // sync data from form
    function handleChange(e) {
        // validate email
        if (e.target.name === 'user_email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                let wordName = 'name';
                let textMessage = 'message';
                if (e.target.name === 'user_name') {
                    setErrorMessage(`Your ${wordName} is required.`);
                } else if (e.target.name === 'message') {
                    setErrorMessage(`Your ${textMessage} is required.`);
                }
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

        setLoading(true); // Set loading to true when submitting

        emailjs.sendForm(_service_id, _template_id, form.current, {
            publicKey: _public_key
        }).then(
            () => {
                console.log('SUCCESS!');
                // Reset form state
                setFormState({ name: '', email: '', message: '' });
                // Reset form fields
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        ).finally(() => {
            setLoading(false); // Set loading to false after request is completed
        });
    };

    return (
        <section className='contact-article'>
            <h2><span className='about'>Contact Me</span></h2>
            <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                <div className='col-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" defaultValue={name} className="form-input" onBlur={handleChange} name="user_name" placeholder='Enter your name' />
                </div>
                <div className='col-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" defaultValue={email} className="form-input" onBlur={handleChange} name="user_email" placeholder='Enter your email' />
                </div>
                <div className='col-message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name="message" defaultValue={message} className="form-input" onBlur={handleChange} rows="5" placeholder='Enter your message' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' disabled={loading} className='contact-button'>{loading ? 'Sending...' : 'Submit'}</button>
            </form>
        </section>
    );
}

export default ContactForm;