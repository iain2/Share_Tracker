import React from "react";
import ShareList from "./ShareList";
import TotalValue from "./TotalValue";
import ShareChart from "./ShareChart";






const UserPortfolio = () => {


    return (
        <>
            <h2>UserPortfolio</h2>
            <ShareList />
            <TotalValue />
            <ShareChart />
        </>
    )
};

export default UserPortfolio;