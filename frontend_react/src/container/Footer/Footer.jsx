import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../clients';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return false;
        }
        // Optional: Add email format validation here
        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
                setFormData({ name: "", email: "", message: "" }); // Clear the form
            })
            .catch((err) => {
                console.error('Error submitting form:', err);
                setLoading(false);
                alert("There was an error submitting your message. Please try again.");
            });
    };

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt="email" />
                    <a href="mailto:divineuwandu84@gmail.com" className='p-text'>divineuwandu84@gmail.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+2348072679674" className='p-text'>+234 8072 6796 74</a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            value={name}
                            onChange={handleChangeInput}
                            aria-label="Your Name"
                        />
                    </div>
                    <div className='app__flex'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Your Email'
                            value={email}
                            onChange={handleChangeInput}
                            aria-label="Your Email"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleChangeInput}
                            aria-label="Your Message"
                        />
                    </div>
                    <button
                        className="p-text"
                        type='button'
                        // onClick={handleSubmit}
                        disabled={loading} // Disable while loading
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className='p-text'>Thank you for getting in touch!</h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);
