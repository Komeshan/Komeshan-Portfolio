import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1b89ae0b-4745-462f-854f-2dfc460d4ed2");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out if you have any questions, opportunities, or just want to connect!</p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <a href="mailto:komeshan002@gmail.com" className="email-link" target="_blank" rel="noopener noreferrer">
                            <p>komeshan002@gmail.com</p>
                        </a>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <a href="tel:+94726038100" className="phone-link" target="_blank" rel="noopener noreferrer">
                          <p>+94 72 603 8100</p>
                        </a>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name!' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email!' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message!'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact