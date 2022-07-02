import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserPortfolio from "../components/UserPortfolio";


const PortfolioContainer = ({ portfolio, getSymbol }) => {





    return (
        <>


            <UserPortfolio portfolio={portfolio} getSymbol={getSymbol} />

        </>
    )
};


export default PortfolioContainer