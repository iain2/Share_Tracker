import React from "react";
import '../App.css';
import styled from "styled-components";

const ValueStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    margin: 5px;
`

const Button = styled.div`
    background-color: #ffffff;
    border: none;
    color: #220c10;
    padding: 2px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
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
            <Button> <p><b>Symbol:</b> {stock["Meta Data"]["2. Symbol"]}</p></Button>
            <Button> <p><b>Value:</b> ${stockDay1}</p> </Button>
            <Button><p className={roundedPercentage<0 ?"negative": "positive"}> <b> Change: {roundedPercentage}% </b></p> </Button> 
        </ValueStyled>
    );
};

export default TotalValue;