import React from 'react'

export default function Stocks({stocks}) {
    console.log(stocks)
 const showStocks = stocks.map((stock) => 
 <div>
     {stock}
 </div>
    )
      // eslint-disable-next-line no-lone-blocks
      return (
          stocks ? 
              <div>
              {showStocks}
              </div>
          :
              ""       
            
)
}
