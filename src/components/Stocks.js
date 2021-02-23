import React from 'react'

export default function Stocks({stocks}) {
    console.log(stocks)
      return (
          stocks ? 
              <div>
                  {stocks.map((stock) => 
                    <div>
                        {stock.symbol}<br/>
                        Date: {stock.date.slice(0, 10)}<br />
                        High: {stock.high} <br />
                        Open: {stock.open} <br />
                        Close: {stock.close} <br />
                        Volume: {stock.volume}
                    </div>
                  )}
              </div>
          :
              ""                      
)
}
