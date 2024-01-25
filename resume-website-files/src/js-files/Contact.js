import '../css-files/Contact.css';

// import React, { useEffect, useState } from 'react';

import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import linkedinLogo from '../other-files/linkedin_white_logo.png'
import githubLogo from '../other-files/github_white_logo.png'
import emailLogo from '../other-files/email_white_logo.png'


const Contact = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [emailContent, setEmailContent] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleContentChange = (event) => {
        setEmailContent(event.target.value);
    };

    // const handleSendEmail = () => {
    //     // Implement the logic to send the email using the 'email' and 'emailContent' states
    //     console.log('Sending email:', email);
    //     console.log('Email content:', emailContent);
    // };

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbigsec', 'template_tdfjry8', form.current, 'WJzEQDf4WXQURNtfA')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className= 'MainTextContactParent' id="Contact">
            <div className='MainTextContactTitle MainTextAnimation'>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>e</span>
            </div>
            <div className='MainTextContactBody'>

                <form className='MainTextEmailParent' ref={form} onSubmit={sendEmail}>
                    <label className='EmailInputLabel'>Your Name:</label>
                    <div className='MainTextEmailDestinationInput'>
                        <input className="EmailInput" type="text" name="user_name" />
                    </div>
                    <label className='EmailInputLabel'>Your Email:</label>
                    <div className='MainTextEmailDestinationInput'>
                        <input className="EmailInput" type="email" name="user_email" />
                    </div>
                    <label className='EmailInputLabel'>Your Message:</label>
                    <div className='MainTextEmailContentInput'>
                        <textarea className="ContentInput" name="message" />
                    </div>
                    <input className="SendButton" type="submit" value="Send" />
                </form>

                <div className='MainTextContactMessage'>
                    <div className='MainTextContactMessageDiv'>
                        <div className='ProjectContainerImage'>
                            <a href="https://github.com/AnneMarieJetton" className="" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                        <span>Check out my respoitories on Github!</span>
                    </div>
                    <div className='MainTextContactMessageDiv'>
                        <div className='ProjectContainerImage'>
                            <a href="https://www.linkedin.com/in/anne-jetton/" className="" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" />
                            </a>
                        </div>
                        <span>Visit my LinkedIn Profile!</span>
                    </div>
                    <div className='MainTextContactMessageDiv' style={{ marginBottom: 0 }}>
                        <div className='ProjectContainerImage'>
                            <a href="mailto:annemariejetton@gmail.com" className="">
                                <img src={emailLogo} alt="Email" />
                            </a>
                        </div>
                        <span>Send me an email!</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };