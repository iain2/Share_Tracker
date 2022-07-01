
import './App.css';
import React, { useState, useEffect } from "react";
import PortfolioContainer from './containers/PortfolioContainer';
import { getPortfolio } from './PortfolioService'


function App() {


  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio().then((allStocks) => {
      setPortfolio(allStocks);
    })
  });


  return (
    <>
      <h1>App</h1>
      <PortfolioContainer portfolio={portfolio} />
    </>
  );
}

export default App;
