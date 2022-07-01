
import './App.css';
import React, { useState, useEffect } from "react";
import PortfolioContainer from './containers/PortfolioContainer';
import NavBar from './components/NavBar';
import SharesContainer from './containers/SharesContainer';
import { getPortfolio } from './PortfolioService'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio().then((allStocks) => {
      setPortfolio(allStocks);
    })
  });


  return (
    <Router>
      <NavBar />
      <Routes>

        <Route exact path="/" element={< PortfolioContainer portfolio={portfolio} />} />
        <Route path="/shares" element={< SharesContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
