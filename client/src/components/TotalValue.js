import React from "react";
import '../App.css';
import styled from "styled-components";

const ValueStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    margin: 5px;
    border: 1px solid #220c10;
`

const TotalValue = ({ stock }) => {

    const lastRefresh = stock["Meta Data"]["3. Last Refreshed"]

    const stockDay1 = stock["Time Series (Daily)"][lastRefresh]["2. high"]
    const stockDay2 = stock["Time Series (Daily)"]["2022-06-30"]["2. high"]

    const stockDifference = stockDay1 - stockDay2;
    const percentageDifference = ((stockDifference / stockDay1) * 100);
    const roundedPercentage = percentageDifference.toFixed(2);
    // const roundedStockPrice = stockDay1.toFixed(2);

    return (
        <ValueStyled>
            <p><b>Symbol:</b> {stock["Meta Data"]["2. Symbol"]}</p>
            <p><b>Value:</b> ${stockDay1}</p>
            <p className={roundedPercentage<0 ?"negative": "positive"}> <b> Change: {roundedPercentage}% </b></p>
        </ValueStyled>
    );
};

export default TotalValue;