import React from 'react';
import Tickers from '../components/Tickers/Tickers';

export default function TickerPage({tickers}) {
    return (
        <div>
            {tickers.map(ticker => 
                <Tickers ticker={ticker}/>
            )}
        </div>
    )
}
