import './App.css';
import React, { useState, useEffect } from "react";
import PortfolioContainer from './containers/PortfolioContainer';
import NavBar from './components/NavBar';
import SharesContainer from './containers/SharesContainer';
import { data, getPortfolio } from './PortfolioService'
import { getStock } from './StockService';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummyData } from './PortfolioService'
import Chart from './components/charts'
import Home from './containers/Home';
import FooterBar from './components/FooterBar';



function App() {


  const [portfolio, setPortfolio] = useState([]);
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [stock, setStock] = useState(dummyData);
  const [searchStock, setSearchStock] = useState('aapl');
  const [searchedStockList, setSearchedStockList] = useState([])



  useEffect(() => {
    getPortfolio().then((allStocks) => {
      setPortfolio(allStocks);
    });
    // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=HJLCHFKGONF4JPE9`)
    //   .then(res => res.json())
    //   .then(data => setStock(data));
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchStock}&apikey=7IP39XV5WY90WNFY`)
      .then(res => res.json())
      .then(data => setSearchedStockList(data.bestMatches))

  }, [stockSymbol, searchStock])

  const getSymbol = (symbol) => {
    setStockSymbol(symbol)
  }

  const searchSymbol = (symbol) => {
    setSearchStock(symbol)
  }



  return (
    <>
      <Router>
        <NavBar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={< PortfolioContainer portfolio={portfolio} getSymbol={getSymbol} stock={stock} />} />
          <Route path="/shares" element={< SharesContainer searchSymbol={searchSymbol} searchedStockList={searchedStockList} />} />

        </Routes>
      </Router>
      <FooterBar />
    </>

  );
}

export default App;
