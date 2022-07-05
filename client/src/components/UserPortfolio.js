import React from "react";
import ShareList from "./ShareList";
import TotalValue from "./TotalValue";
import ShareChart from "./ShareChart";
import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 50% 50%;
`

const GridList = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #2e6171;
    position: sticky;
    max-width: 250px;
    min-height: 700px;
    margin-left: 20px;
    border-left: 1px solid #220c10;
    border-right: 1px solid #220c10;
`

const GridChart = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
`

const GridTotal = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
`

const UserPortfolio = ({ portfolio, getSymbol, stock }) => {


    return (
        <GridContainer>
            <GridList>
                <ShareList portfolio={portfolio} getSymbol={getSymbol} />
            </GridList>
            <GridChart>
                <ShareChart />
            </GridChart>
            <GridTotal>
                {stock ? <TotalValue stock={stock} /> : <p>loading</p>}
            </GridTotal>
        </GridContainer>
    )
};

export default UserPortfolio;