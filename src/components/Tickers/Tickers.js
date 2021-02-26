import React from 'react';
import './Tickers.css';


export default function Tickers({ticker}) {
    return (
      <div className="ticker-page">
       <div className="ticker-company">
            {ticker.name}
       </div>
       <div className="ticker-symbol">
            {ticker.symbol}
       </div>
      </div>
    )
}
