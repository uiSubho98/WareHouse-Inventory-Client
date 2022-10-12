import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7l5js05', e.target,'-IWdSf3ETCVze2MEC')
      .then((result) => {
        toast("Thanks you,Email Sent.");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



    return (
       <div  className='contact-container'>
         <Bounce left>

         <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2 className='h2'>CONTACT</h2>
      <p className='text-white fw-bold text-center'>Please feel free to give us a feedback  or concerns about your product.We want to hear from you and are happy to answer your questions.Usually we will get back to you within 24hours.<br></br><span className='text-secondary'>(EMAIL JS Used Here)</span> </p>
      <div className="links">
      
        <div className="link">
          <a href='https://www.linkedin.com/in/subhojit-dutta-6736a116b/'><img className='contact-img' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
        </div>
        <div className="link">
          <a href='https://github.com/uiSubho98'><img className='contact-img' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form onSubmit={sendEmail}>
        <div className="form-item">
          <input type="text" name="name" required/>
          <label className='label'>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required/>
          <label className='label'>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required></textarea>
          <label className='label'>Message:</label>
        </div>
        <button className="submit-btn">Send</button>  
      </form>
    </div>
  </div>
  <ToastContainer/>
</section>

         </Bounce>

       </div>
        
        
    );
};

export default Contact;