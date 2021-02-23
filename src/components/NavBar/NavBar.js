import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="stock-logo">
                <img className="image" src="/images/stock.png" alt=""></img>
            </div>
            <div className="navbar-links">
                <a href="https://www.cinquewd.com" target='_blank' rel="noreferrer">Cinque</a>
            </div>
        </div>
    )
}
