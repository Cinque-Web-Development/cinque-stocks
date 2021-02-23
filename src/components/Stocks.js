import React from "react";
import StockDisplay from "./StockDisplay/StockDisplay";
import "./Stocks.css";

export default function Stocks({ stocks }) {
  return stocks ? (
    <>
      {stocks.map((stock) => (
        <div className="stock-display">
          <StockDisplay stock={stock} />
        </div>
      ))}
    </>
  ) : (
    ""
  );
}
