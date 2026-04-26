// src/pages/Regions.jsx
import React from 'react';
import './Contact.css'; // Import the CSS file
const Contact = () => {
  return (
            <>
            <h2 className="title">CONTACT US</h2>
          
              
              <div className="contact-form">
                <form id="cf" action="Contact.php" method="post">
                  <div className="Form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input
                      type="text"
                      className="Form-control"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="Form-group">
                    <label htmlFor="email">Email:</label><br/>
                    <input
                      type="email"
                      className="Form-control"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="Form-group">
                    <label htmlFor="subject">Subject:</label><br/>
                    <input
                      type="text"
                      className="Form-control"
                      id="subject"
                      name="subject"
                      required
                      autoComplete="subject"
                    />
                  </div>
                  <div className="Form-group">
                    <label htmlFor="message">Message:</label><br/>
                    <textarea
                      className="Form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                      autoComplete="message"
                    ></textarea>
                  </div>
                  <div className="Form-group">
                  <button type="submit" className="formbtn">
                    Send Message
                  </button>
                </div>
                </form>
              </div>
            
         </>
    
  );
};

export default Contact;