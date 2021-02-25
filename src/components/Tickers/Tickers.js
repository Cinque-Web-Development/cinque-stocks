import React from 'react';
import './Tickers.css';


export default function Tickers({ticker}) {
    return (
      <div>
       {ticker.name} - {ticker.symbol}
      </div>
    )
}
