import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Stocks from './components/Stocks';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';
import getStocks from './redux/actionCreators';
import fetchTickers from './services/tickers-api';
import TickerPage from './Pages/TickerPage'


function App({stocks, getStocks}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [tickers, setTickers] = useState([]);

   async function getTickers() {
    const response = await fetchTickers();
    console.log(response.data.data);
    setTickers(response.data.data)
  }

  

  useEffect(() => {
  if(searchTerm) {
    getStocks(searchTerm)
  }
  getTickers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const handleSearchSubmit = (e, term) => {
    e.preventDefault();
    setSearchTerm(term)
  }

  return (
    <Router>
      <NavBar tickers={tickers} />
      <Route exact path="/" render={() =>
    <div className="App">
      <SearchBar handleSearchSubmit={handleSearchSubmit}/>
      <Stocks stocks={stocks}/>
    </div>
      }>
      </Route>
    <Route exact path="/tickers" render={() =>
    <div className="App">
      <TickerPage tickers={tickers}/>
    </div>
    }>
    </Route>
    <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {stocks: state.stocks}
}

export default connect(mapStateToProps, {getStocks})(App);
