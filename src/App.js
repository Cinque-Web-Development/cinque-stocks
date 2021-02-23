import React, {useState, useEffect} from 'react';
import './App.css';
import Stocks from './components/Stocks';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';
import getStocks from './redux/actionCreators';

function App({stocks, getStocks}) {
  const [searchTerm, setSearchTerm] = useState('')

 

  useEffect(() => {
  if(searchTerm) {
    getStocks(searchTerm)
  }
  }, [searchTerm])

  const handleSearchSubmit = (e, term) => {
    e.preventDefault();
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar handleSearchSubmit={handleSearchSubmit}/>
      <Stocks stocks={stocks}/>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {stocks: state.stocks}
}

export default connect(mapStateToProps, {getStocks})(App);
