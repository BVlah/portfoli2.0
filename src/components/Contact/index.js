import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers.js';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
            if (!errorMessage) {
                console.log('Submit Form', formState);
            }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
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
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };
    return (
        <section>
            <div>
                <h1 className="header"><u>Contact Me!</u></h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input placeholder="Name" className="input response" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="field">
                        <input placeholder="Email" className="input response" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className="field">
                        <textarea placeholder='Message' className="textarea response" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn btn-primary text-center" data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;