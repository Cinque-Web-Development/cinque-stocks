import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="stock-logo">
                <img className="image" src="/images/stock.png" alt=""></img>
                <h1 className="title">Cinque Stocks</h1>
            </div>
            <div className="navbar-links">
                <a className="links" href="https://www.cinquewd.com" target='_blank' rel="noreferrer">Cinque</a>
            </div>
        </div>
    )
}
