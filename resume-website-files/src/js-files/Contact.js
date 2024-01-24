import '../css-files/Contact.css';

// import React, { useEffect, useState } from 'react';

import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

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
                <div className='MainTextEmailParent'>

                    {/* <div className='MainTextEmailDestinationInput'>
                        <label className='EmailInputLabel' htmlFor="recipientEmailInput">Your Name: </label>
                        <input
                            type="email"
                            id="recipientEmailInput"
                            className="EmailInput"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className='MainTextEmailDestinationInput'>
                        <label className='EmailInputLabel' htmlFor="senderEmailInput">Your Email: </label>
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

                    <button onClick={handleSendEmail}>Send</button> */}

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>

                </div>

                <div className='MainTextContactMessage'>
                    Interested in contacting me? click any of the three links on the side bar, or you can write me an email right here! Happy Coding {'<'}3
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