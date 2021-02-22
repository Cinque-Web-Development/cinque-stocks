import React from 'react'

export default function Stocks({stocks}) {
    console.log(stocks)

      // eslint-disable-next-line no-lone-blocks
      return (
          stocks ? 
              <div>
                  {Object.keys(stocks).map((stock, i) => (
                      <div>
                          {stock}
                          {stock.values[0].open}
                      </div>
              ))}
              </div>
          :
              ""       
            
)
}
