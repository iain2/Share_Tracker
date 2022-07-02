import React from "react";
import ShareList from "./ShareList";
import TotalValue from "./TotalValue";
import ShareChart from "./ShareChart";






const UserPortfolio = ({ portfolio, getSymbol }) => {


    return (
        <>
            <h2>UserPortfolio</h2>
            <ShareList portfolio={portfolio} getSymbol={getSymbol} />
            <TotalValue />
            <ShareChart />
        </>
    )
};

export default UserPortfolio;