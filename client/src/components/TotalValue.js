import React from "react";
import styled from "styled-components";

const TotalValue = ({ stock }) => {

    const lastRefresh = stock["Meta Data"]["3. Last Refreshed"]

    const stockDay1 = stock["Time Series (Daily)"][lastRefresh]["2. high"]
    const stockDay2 = stock["Time Series (Daily)"]["2022-06-30"]["2. high"]

    const stockDifference = stockDay1 - stockDay2;
    const percentageDifference = ((stockDifference / stockDay1) * 100);
    const roundedPercentage = percentageDifference.toFixed(2);
    // const roundedStockPrice = stockDay1.toFixed(2);

    return (
        <>
            <h3>Symbol: {stock["Meta Data"]["2. Symbol"]}</h3>
            <h3>Value: ${stockDay1}</h3>
            <h3>Change: {roundedPercentage}%</h3>
        </>
    );
};

export default TotalValue;