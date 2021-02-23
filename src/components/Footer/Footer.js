import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="cinque-footer">
                <img className="image" src="/images/cinque.png" alt=""></img> <br />
                <p className="cinque-link">&copy; 2020 <a className="cinque-link" href="https://www.cinquewd.com" target="_blank" rel="noreferrer">Cinque Web Development</a></p>
            </div>
            <div className="footer-links">
               <a href="https://www.linkedin.com/company/cinque-web-dev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a> 
                <a href="https://github.com/Cinque-Web-Development" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i></a>
                <a href="https://twitter.com/cinquewebdev" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
            </div>
        </div>
    )
}
