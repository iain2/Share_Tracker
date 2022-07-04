import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserPortfolio from "../components/UserPortfolio";


const PortfolioContainer = ({ portfolio, getSymbol, stock }) => {





    return (
        <>

            {/* <h1>{stock["Meta Data"]["2. Symbol"]}</h1> */}
            <UserPortfolio portfolio={portfolio} getSymbol={getSymbol} />

        </>
    )
};


export default PortfolioContainer