import React, {useState, useEffect} from 'react';
import './App.css';
import fetchStocks from './services/stock-api';
import Stocks from './components/Stocks';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [stocks, setStocks] = useState([]);

  async function getStocks() {
    const stockResults = await fetchStocks();
    setStocks(stockResults.data.data)
  }

  useEffect(() => {
   getStocks()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Stocks stocks={stocks}/>
      <Footer />
    </div>
  );
}

export default App;
