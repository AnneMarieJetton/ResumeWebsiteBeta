import '../css-files/Contact.css';

import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [email, setEmail] = useState('');
    const [emailContent, setEmailContent] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContentChange = (event) => {
        setEmailContent(event.target.value);
    };

    const handleSendEmail = () => {
        // Implement the logic to send the email using the 'email' and 'emailContent' states
        console.log('Sending email:', email);
        console.log('Email content:', emailContent);
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
                <div className='MainTextEmailParent'>
                    <div className='MainTextEmailDestinationInput'>
                        <label className='EmailInputLabel' htmlFor="recipientEmailInput">To: </label>
                        <input
                            type="email"
                            id="recipientEmailInput"
                            className="EmailInput"
                            value='annemariejetton@gmail.com'
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className='MainTextEmailDestinationInput'>
                        <label className='EmailInputLabel' htmlFor="senderEmailInput">From: </label>
                        <input
                            type="email"
                            id="senderEmailInput"
                            className="EmailInput"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className='MainTextEmailContentInput'>
                        <textarea
                            id="contentInput"
                            className="ContentInput"
                            value={emailContent}
                            onChange={handleContentChange}
                        />
                    </div>

                    <button onClick={handleSendEmail}>Send</button>
                </div>

                <div className='MainTextContactMessage'>
                    Interested in contacting me? click any of the three links on the side bar, or you can write me an email right here! Happy Coding {'<'}3
                </div>

            </div>
        </div>
    )
}

export default Contact;