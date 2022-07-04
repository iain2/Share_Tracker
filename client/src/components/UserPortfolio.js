import React from "react";
import ShareList from "./ShareList";
import TotalValue from "./TotalValue";
import ShareChart from "./ShareChart";
import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
`

const GridList = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
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

const UserPortfolio = ({ portfolio, getSymbol }) => {


    return (
        <GridContainer>
                <GridList>
                    <ShareList portfolio={portfolio} getSymbol={getSymbol} />
                </GridList>
                <GridChart>
                    <ShareChart />
                </GridChart>
                <GridTotal>
                    <TotalValue />
                </GridTotal>
        </GridContainer>
    )
};

export default UserPortfolio;