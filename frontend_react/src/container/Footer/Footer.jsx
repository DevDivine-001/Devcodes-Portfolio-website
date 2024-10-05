// import React, { useState } from 'react';
// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../clients';
// import './Footer.scss';


// const Footer = () => {
//     const [formData, setFormData] = useState({ name: "", email: "", message: "" })
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false)
//     const [loading, setLoading] = useState(false)

//     const { name, email, message } = formData

//     const handleChangeInput = (e) => {
//         const { name, value } = e.formData
//         // const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }

//     const handleSubmit = () => {
//         setLoading(true)
//         console.log(formData)

//         const contact = {
//             _type: 'contact',
//             name: name,
//             email: email,
//             message: message,
//         }
//         client.create(contact)
//             .then(() => {
//                 setLoading(false)
//                 setIsFormSubmitted(true)
//             })

//     }
//     return (
//         <>
//             <h2 className="head-text">Take a coffee & chat with me</h2>
//             <div className='app__footer-cards'>
//                 <div className='app__footer-card'>
//                     <img src={images.email} alt="" />
//                     <a href="mailto:divineuwandu84@gmail.com" className='p-text'>divineuwandu84@gmail.com</a>
//                 </div>
//                 <div className='app__footer-card'>
//                     <img src={images.mobile} alt="" />
//                     <a href="tel:+234 8072 6796 74" className='p-text'>+234 8072 6796 74</a>
//                 </div>
//             </div>

//             {!isFormSubmitted ?
//                 <div className='app__footer-form app__flex'>
//                     <div className='app__flex'>
//                         <input type="text" name="name" id="" placeholder='Your Name' value={name} onChange={handleChangeInput}

//                         />

//                     </div>
//                     <div className='app__flex'>
//                         <input type="text" name="email" id="" placeholder='Your Email' value={email} onChange={handleChangeInput}
//                         />

//                     </div>
//                     <div>
//                         <textarea name="message" id=""
//                             value={message}
//                             onChange={handleChangeInput}
//                         />
//                     </div>
//                     <button className="p-text" type='button'
//                         onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
//                 </div> :
//                 <div>
//                     <h3 className='p-text'>Thank you for getting in touch with Divine DevCodes</h3>
//                 </div>
//             }

//         </>
//     );
// };

// export default AppWrap(
//     MotionWrap(Footer, 'app__footer'),
//     'contact',
//     'app__whitebg',
// );

import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../clients'; // Ensure client is imported correctly
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    // Handle input changes
    const handleChangeInput = (e) => {
        const { name, value } = e.target; // Use e.target to get the input values
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        };

        // Send form data
        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true); // Mark form as submitted
            })
            .catch((err) => {
                console.error('Error submitting form:', err);
                setLoading(false); // Stop loading if there's an error
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
                    <a href="tel:+234 8072 6796 74" className='p-text'>+234 8072 6796 74</a>
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
                        />
                    </div>
                    <div className='app__flex'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Your Email'
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        className="p-text"
                        type='button'
                        onClick={handleSubmit}
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


// import React, { useState } from 'react';

// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../clients';
// import './Footer.scss';

// const Footer = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const { name, email, message } = formData;

//     const handleChangeInput = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = () => {
//         if (!name || !email || !message) {
//             alert('Please fill in all fields.');
//             return;
//         }

//         setLoading(true);

//         const contact = {
//             _type: 'contact',
//             name: name, // Change to name
//             email: email,
//             message: message,
//         };

//         client.create(contact)
//             .then(() => {
//                 setLoading(false);
//                 setIsFormSubmitted(true);
//                 setFormData({ name: '', email: '', message: '' }); // Reset form
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setLoading(false); // Stop loading on error
//                 alert('Error submitting form. Please try again later.');
//             });
//     };

//     return (
//         <>
//             <h2 className="head-text">Take a coffee & chat with me</h2>

//             <div className="app__footer-cards">
//                 <div className="app__footer-card ">
//                     <img src={images.email} alt="email" />
//                     <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
//                 </div>
//                 <div className="app__footer-card">
//                     <img src={images.mobile} alt="phone" />
//                     <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
//                 </div>
//             </div>
//             {!isFormSubmitted ? (
//                 <div className="app__footer-form app__flex">
//                     <div className="app__flex">
//                         <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
//                     </div>
//                     <div className="app__flex">
//                         <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
//                     </div>
//                     <div>
//                         <textarea
//                             className="p-text"
//                             placeholder="Your Message"
//                             value={message}
//                             name="message"
//                             onChange={handleChangeInput}
//                         />
//                     </div>
//                     <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
//                 </div>
//             ) : (
//                 <div>
//                     <h3 className="head-text">
//                         Thank you for getting in touch!
//                     </h3>
//                 </div>
//             )}
//         </>
//     );
// };

// export default AppWrap(
//     MotionWrap(Footer, 'app__footer'),
//     'contact',
//     'app__whitebg',
// );



// import React, { useState } from 'react';

// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../clients';
// import './Footer.scss';

// const Footer = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const { username, email, message } = formData;

//     const handleChangeInput = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = () => {
//         setLoading(true);

//         const contact = {
//             _type: 'contact',
//             name: formData.username,
//             email: formData.email,
//             message: formData.message,
//         };

//         client.create(contact)
//             .then(() => {
//                 setLoading(false);
//                 setIsFormSubmitted(true);
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <>
//             <h2 className="head-text">Take a coffee & chat with me</h2>

//             <div className="app__footer-cards">
//                 <div className="app__footer-card ">
//                     <img src={images.email} alt="email" />
//                     <a href="mailto:divineuwandu84@gmail.com" className="p-text">divineuwandu84@gmail.com</a>
//                 </div>
//                 <div className="app__footer-card">
//                     <img src={images.mobile} alt="phone" />
//                     <a href="tel:+234 8072 6796 74" className="p-text">+234 8072 6796 74</a>
//                 </div>
//             </div>
//             {!isFormSubmitted ? (
//                 <div className="app__footer-form app__flex">
//                     <div className="app__flex">
//                         <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
//                     </div>
//                     <div className="app__flex">
//                         <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
//                     </div>
//                     <div>
//                         <textarea
//                             className="p-text"
//                             placeholder="Your Message"
//                             value={message}
//                             name="message"
//                             onChange={handleChangeInput}
//                         />
//                     </div>
//                     <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
//                 </div>
//             ) : (
//                 <div>
//                     <h3 className="head-text">
//                         Thank you for getting in touch!
//                     </h3>
//                 </div>
//             )}
//         </>
//     );
// };

// export default AppWrap(
//     MotionWrap(Footer, 'app__footer'),
//     'contact',
//     'app__whitebg',
// );