import React from 'react';
import './Contact.css';
import Footer from '../Footer';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='content'>
          <div className='contact-section'>
            <div>
              <div className="contact-top-wrapper">
                <div className="contact-email">
                  <h3>Email</h3>
                  <p><a href="mailto:sashenka.gamage@connect.polyu.hk">sashenka.gamage@connect.polyu.hk</a></p>
                  <p><a href="mailto:sgamage@wisc.edu">sgamage@wisc.edu</a></p>
                </div>

                <div className="social-links">
                  <h3>Connect with me on:</h3>
                  <div className="social-icons-contact">
                    <a href="https://www.linkedin.com/in/sashenka-gamage-2001/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://x.com/sashenkagamage" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i> X(Twitter)
                    </a>
                    <a href="https://github.com/sashenkagamage" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://sashenka.me" target="_blank" rel="noreferrer">
                      <i className="fas fa-globe"></i> Website
                    </a>
                  </div>
                </div>
              </div>
              
              <div className='contact-text'>
               
                
                <div className="contact-info">
                  <div className="contact-item about-me-section">
                    <div className="about-me-content">
                    <div className="about-me-image">
<<<<<<< HEAD
                        <img src="/linkedin_dp.jpg" alt="Sashenka Gamage" />
=======
                        <img src="/linkedin-dp.png" alt="Sashenka Gamage" />
>>>>>>> 1b4fb77b58da50da743f9d1f5fe1ef50b4b5c1a5
                      </div>
                      <div className="about-me-text">
                      <h2>Hi, I'm Sashenka Gamage.</h2>
              <div className="">
                <p><i className="fas fa-map-marker-alt"></i> Hong Kong / Wisconsin, USA (Spring 2025)</p>
              </div>
                        <p>
                          <b>Electronics Engineering</b> student passionate about <b>robotics</b> and <b>autonomous systems</b>. 
                          Currently focused on <b>UAV navigation</b> and <b>control systems</b>, while also committed to 
                          reducing gender disparity in STEM as a UN Millennium Fellow.
                        </p>
                        <p>
                  I'm always open to new opportunities, collaborations, or just a friendly chat about robotics, 
                  UAVs, or any tech-related topics. Feel free to reach out through any of the channels above!
                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact; 