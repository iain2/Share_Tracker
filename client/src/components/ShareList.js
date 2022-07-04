import React from "react";
import ListItem from "./ListItems";
import styled from "styled-components";

const ListColumn = styled.div`
    display: block;
`

const ShareList = ({ portfolio, getSymbol }) => {

    const portfolioNodes = portfolio.map((stock) => {
        return <ListItem stock={stock} key={stock._id} getSymbol={getSymbol} />
    })


    return (

        <ListColumn>
            {portfolioNodes}



        </ListColumn>
    )
};

export default ShareList;