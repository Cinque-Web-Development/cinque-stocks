import React, {useState, useEffect} from 'react';
import './Stocks.css';
import Apple from '../assets/appleLogo.png';
import MicroSoft from '../assets/microsoftLogo.png';
import FaceBook from '../assets/facebookLogo.png';
import Google from '../assets/googleLogo.png';
import Tesla from '../assets/teslaLogo.png';
import Zoom from '../assets/zoomLogo.png';
import Zom from '../assets/zomLogo.png';

export default function Stocks({stocks}) {
    
  
    
      return (
          stocks ? 
          <>
                  {stocks.map((stock) => 
                  <div className="stock-display">
                    <div className="stock-header">
                        {stock.symbol}<br/>
                        Date: {stock.date.slice(0, 10)}<br />
                    </div>
                    <div className="stock-info">
                        High: {stock.high} <br />
                        Open: {stock.open} <br />
                        Close: {stock.close} <br />
                        Volume: {stock.volume}
                    </div>
                  </div>
                    
)}
    </>
          :
              ""                      
)
}
