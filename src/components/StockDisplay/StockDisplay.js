import React, {useState, useEffect} from 'react';
import './StockDisplay.css';
import Apple from '../../assets/appleLogo.png'
import MicroSoft from '../../assets/microsoftLogo.jpeg';
import FaceBook from '../../assets/facebookLogo.png';
import Google from '../../assets/googleLogo.png';
import Tesla from '../../assets/teslaLogo.png';
import Zoom from '../../assets/zoomLogo.jpg';
import Zom from '../../assets/zomLogo.png';


export default function StockDisplay({stock}) {
    const [icon, setIcon] = useState('')

    useEffect(() =>  {
        console.log(stock.symbol)
        setIcon(stock.symbol)
    }, [])

    let stockIcon = icon === "AAPL" ? Apple : icon === "MSFT" ? MicroSoft : icon === "FB" ? FaceBook : icon === "GOOG" ? Google : icon === "TSLA" ? Tesla : icon === "ZM" ? Zoom : icon === "ZOM" ? Zom : ''

    // eslint-disable-next-line no-extend-native
    Number.prototype.commafy = function () {
        return String(this).commafy();
    };

    return (
        !stock.open || !stock.close || !stock.volume ?
        <div className="stock-card">
            <div>
            {stock.symbol} <br /><br />
            <img className="stock-image" src={stockIcon} alt=""></img>
            <h3>Date: {stock.date.slice(0, 10)}</h3>
            </div>
            <div>
                <h4 hidden>Open: ${stock.open}</h4>
                <h4>High: ${stock.high}</h4>
                <h4 hidden>Close: ${stock.close}</h4>
                <h4 hidden>Volume: {stock.volume}</h4>
            </div>
        </div> :
        <div className="stock-card">
            <div>
            <h2>{stock.symbol}</h2> <br /><br />
            <img className="stock-image" src={stockIcon} alt=""></img>
            <h3>Date: {stock.date.slice(0, 10)}</h3>
            </div>
            <div>
                <h4>Open: ${stock.open}</h4>
                <h4>High: ${stock.high}</h4>
                <h4>Close: ${stock.close}</h4>
                <h4>Volume: {stock.volume.toLocaleString('en')}</h4>
            </div>
        </div>
    //     ? !stock.close || !stock.high || !stock.volume ?
    //     <div className="stock-card">
    //     <div>
    //     {stock.symbol} <br /><br />
    //     <img className="stock-image" src={stockIcon} alt=""></img>
    //     <h3>Date: {stock.date.slice(0, 10)}</h3>
    //     </div>
    //     <div>
    //         <h4>Open: ${stock.open}</h4>
    //         <h4 hidden>High: ${stock.high}</h4>
    //         <h4 hidden>Close: ${stock.close}</h4>
    //         <h4 hidden>Volume: {stock.volume}</h4>
    //     </div>
    // </div> :
    // <div className="stock-card">
    //     <div>
    //     {stock.symbol} <br /><br />
    //     <img className="stock-image" src={stockIcon} alt=""></img>
    //     <h3>Date: {stock.date.slice(0, 10)}</h3>
    //     </div>
    //     <div>
    //         <h4>Open: ${stock.open}</h4>
    //         <h4>High: ${stock.high}</h4>
    //         <h4>Close: ${stock.close}</h4>
    //         <h4>Volume: {stock.volume}</h4>
    //     </div>
    // </div>
    )
}
