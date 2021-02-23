import React from 'react'

export default function Stocks({stocks}) {
    console.log(stocks)
      return (
          stocks ? 
              <div>
                  {stocks.map((stock) => 
                    <div>
                        {stock.symbol}<br/>
                        {stock.date}
                        {stock.open}
                    </div>
                  )}
              </div>
          :
              ""       
                 
)
}
