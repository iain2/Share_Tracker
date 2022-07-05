import React from "react";
import ListItem from "./ListItems";
import styled from "styled-components";

const ListColumn = styled.div`
    display: block;
    margin-top: -10px;
    padding-left: 10px;
`

const ShareList = ({ portfolio, getSymbol }) => {

    const portfolioNodes = portfolio.map((stock) => {
        return <ListItem stock={stock} key={stock._id} getSymbol={getSymbol} />
    })

    return (

        <ListColumn>
<<<<<<< HEAD
            <p>{portfolioNodes}</p>
=======
            {portfolioNodes}



>>>>>>> 87842b3c81c68a8b5b56bff0858d059ae9849598
        </ListColumn>
    )
};

export default ShareList;