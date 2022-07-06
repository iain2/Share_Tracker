import React from "react";
import ShareList from "../components/ShareList";
import TotalValue from "../components/TotalValue";
import ChartItem from "../components/ShareChart";

import styled from "styled-components";


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 50% 20%;
    width: 100vw;
    height: 100vh
`

const GridList = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #2e6171;
    position: sticky;
    max-width: 250px;
    height: fit-content;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 5px;
`

const GridChart = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
`

const GridTotal = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 30px;
    margin-right: 30px;
`

const ShareDetailContainer = styled.div`
    width: 1050px;
    height: fit-content;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #2e6171;
    position: absolute;
    left: 300px;
`

const UserPortfolio = ({ portfolio, getSymbol, stock }) => {

    const errorMessage = {
        "Note": "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."
    }


    return (
        <GridContainer>
            <GridList>
                <ShareList portfolio={portfolio} getSymbol={getSymbol} />
            </GridList>
            <ShareDetailContainer>
            <GridChart>
                <ChartItem stock={stock} />
            </GridChart>
            <GridTotal>
                <TotalValue stock={stock} />
            </GridTotal>
            </ShareDetailContainer>
        </GridContainer>
    )
};

export default UserPortfolio;
