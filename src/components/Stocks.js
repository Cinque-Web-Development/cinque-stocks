import React from 'react'

export default function Stocks({stocks}) {
    console.log(stocks)

    const showStocks = stocks.map(stock => 
        <div>
            {stock}
        </div>
    )
    return (
        <div>
            {showStocks}
        </div>
    )
}
