import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const ButtonMailto = ({ mailto, icon }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
           {icon && <i className={`fa ${icon}`} aria-hidden="true" style={{color: 'white'}} />}
           
        </Link>
    );
};
  return (
    <div className='footer-container'>
     
        <div className='my-email'><a href="mailto:sashenka.gamage@connect.polyu.hk">sashenka.gamage@connect.polyu.hk</a></div>
       
   <section className='social-media'>
 <div className='social-media-wrap'>
    <div class='social-icons'>
    <Link
              class='social-icon-link github'
              to='https://github.com/sashenkagamage'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github fa-2x' style={{color: 'white'}} />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/sashenka.gamage.3'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f fa-2x' style={{color: 'white'}} />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/sash__2001/?igshid=NTc4MTIwNjQ2YQ%3D%3D#'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram fa-2x' style={{color: 'white'}} />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/sash__2001'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter fa-2x' style={{color: 'white'}} />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/sashenka-gamage-2001/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin fa-2x' style={{color: 'white'}} />
            </Link>
            
          </div>
          </div>
       
        </section>
        <section className='social-media'>
        <small class='website-rights'>Sashenka Gamage © 2023</small>
        </section>
        
        </div>
 
    
  )
}

export default Footer
