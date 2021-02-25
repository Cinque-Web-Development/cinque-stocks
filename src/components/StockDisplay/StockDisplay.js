import React, { useState, useEffect } from "react";
import "./StockDisplay.css";
import Apple from "../../assets/appleLogo.png";
import MicroSoft from "../../assets/microsoftLogo.jpeg";
import FaceBook from "../../assets/facebookLogo.png";
import Google from "../../assets/googleLogo.png";
import Tesla from "../../assets/teslaLogo.png";
import Zoom from "../../assets/zoomLogo.jpg";
import Zom from "../../assets/zomLogo.png";

export default function StockDisplay({ stock }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(stock.symbol);
  }, [stock.symbol]);

  let stockIcon =
    icon === "AAPL"
      ? Apple
      : icon === "MSFT"
      ? MicroSoft
      : icon === "FB"
      ? FaceBook
      : icon === "GOOG"
      ? Google
      : icon === "TSLA"
      ? Tesla
      : icon === "ZM"
      ? Zoom
      : icon === "ZOM"
      ? Zom
      : "";

  return !stock === "underfined" ? (
        <div>
            "This stock is not available"
        </div>
  ) : (
    <div className="stock-card">
      <div className="stock-head">
        <h2>{stock.symbol}</h2> <br />
        <br />
        <img className="stock-image" src={stockIcon} alt=""></img>
        <h3>Date: {stock.date.slice(0, 10)}</h3>
      </div>
      <div className="stock-info">
        <h4>Open: ${parseFloat(stock.open).toFixed(2)}</h4>
        <h4>High: ${parseFloat(stock.high).toFixed(2)}</h4>
        <h4>Close: ${parseFloat(stock.close).toFixed(2)}</h4>
        <h4>Volume: {stock.volume.toLocaleString("en")}</h4>
      </div>
    </div>
  );
}
