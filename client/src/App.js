
import './App.css';
import React, { useState, useEffect } from "react";
import PortfolioContainer from './containers/PortfolioContainer';
import NavBar from './components/NavBar';
import SharesContainer from './containers/SharesContainer';
import { getPortfolio } from './PortfolioService'
import { getStock } from './StockService';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  const [portfolio, setPortfolio] = useState([]);
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [stock, setStock] = useState([]);

  const getStock = () => {
    return
  }

  useEffect(() => {
    getPortfolio().then((allStocks) => {
      setPortfolio(allStocks);
    });
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=IOETLV12N9IIMNFD`)
      .then(res => res.json())
      .then(data => setStock(data))
  }, [stockSymbol])

  const getSymbol = (symbol) => {
    setStockSymbol(symbol)
  }



  return (
    <Router>
      <NavBar />
      <Routes>





        <Route exact path="/" element={< PortfolioContainer portfolio={portfolio} getSymbol={getSymbol} />} />
        <Route path="/shares" element={< SharesContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
