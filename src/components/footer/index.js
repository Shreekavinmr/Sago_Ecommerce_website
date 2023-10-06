import React from "react";
import './styles.scss';

const Footer = props =>{
    return(
        <footer className="footer">
            <div className="contact-info">
        <p>
          Contact us at:
          <a href="tel:+91 9787110000">+91 9787110000 </a> |
          <a href="mailto:info@sagosupplier.com">info@sakthivinayagasago.com</a>
        </p>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/sagosupplier" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        |
        <a href="https://www.instagram.com/sagosupplier" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
           <div className="wrap">
                © Sakthi Vinayaga 2023
            </div> 
            
        </footer>
    );

};

export default Footer;