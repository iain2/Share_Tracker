import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserPortfolio from "../components/UserPortfolio";
import { getPortfolio } from '../PortfolioService'

const PortfolioContainer = () => {

    const [portfolio, setPortfolio] = useEffect([]);

    useEffect(() => {
        getPortfolio().then((allStocks) => {
            setPortfolio(allStocks);
        })
    });



    return (
        <>
            <h1>PortfolioContainer</h1>
            <NavBar />
            <UserPortfolio portfolio={portfolio} />

        </>
    )
};


export default PortfolioContainer