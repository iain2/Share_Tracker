import React from "react";


const TotalValue = ({ stock }) => {

    // const lastRefresh = stock["Meta Data"]["3. Last Refreshed"]

    const stockDay1 = stock["Time Series (Daily)"]["2022-07-01"]["2. high"]
    const stockDay2 = stock["Time Series (Daily)"]["2022-06-30"]["2. high"]

    const stockDifference = stockDay1 - stockDay2;
    const percentageDifference = ((stockDifference / stockDay1) * 100);
    const roundedPercentage = percentageDifference.toFixed(2);
    const roundedStockPrice = stockDay1.tofixed(2);






    return (
        <>
            <p>Symbol: {stock["Meta Data"]["2. Symbol"]}</p>
            <p>Value: ${roundedStockPrice}</p>
            <p>Change: {roundedPercentage}%</p>
        </>
    );
};

export default TotalValue;