import React from "react";
import ShareList from "./ShareList";
import TotalValue from "./TotalValue";
import ShareChart from "./ShareChart";
import styled from "styled-components";

const GridContainer = styled.div`    
    display: grid;
    grid-template-areas: 
    'GridList shareslist'
    'GridChart sharechart'
    'GridValue totalvalue'
    ;
    grid-template-columns: 3fr 7fr;
    grid-template-rows: 3fr 7fr;
`
const GridList = styled.div`
    grid-area: shareslist;
`

const GridChart = styled.div`
    grid-area: sharechart;
`

const GridValue = styled.div`
    grid-area: totalvalue;
`

const UserPortfolio = ({ portfolio, getSymbol }) => {


    return (
        <>
        <GridContainer>
            <GridList>
                <ShareList portfolio={portfolio} getSymbol={getSymbol} />
            </GridList>
            <GridChart>
                <ShareChart />
            </GridChart>
            <GridValue>
                <TotalValue />
            </GridValue>
        </GridContainer>
        </>
    )
};

export default UserPortfolio;