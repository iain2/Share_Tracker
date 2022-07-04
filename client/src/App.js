
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



function App() {


  const [portfolio, setPortfolio] = useState([]);
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [stock, setStock] = useState(dummyData);

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
        <Route exact path="/" element={< PortfolioContainer portfolio={portfolio} getSymbol={getSymbol} stock={stock} />} />
        <Route path="/shares" element={< SharesContainer />} />
      </Routes>
    </Router>
    // <div className="App">
    // <Chart stock={stock}/>
    // </div>
  );
}

export default App;
