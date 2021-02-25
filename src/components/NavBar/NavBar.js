import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="stock-logo">
                <a href="/"><img className="image" src="/images/stock.png" alt=""></img></a>
                <h1 className="title">Cinque Stocks</h1>
            </div>
            <div className="tickers">
               <Link className="ticker-link" to="/tickers">Stock Tickers</Link>
            </div>
        </div>
    )
}
