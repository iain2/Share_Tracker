import React from "react";
import styled from "styled-components";

const ListColumn = styled.div`
    display: block;
`

const ListItem = ({ stock, getSymbol }) => {

    const handleClick = (event) => {
        getSymbol(event.target.value)
    }

    return (
        <ListColumn>
            <button onClick={handleClick} value={stock.symbol}>{stock.name}</button>
        </ListColumn>
    );
};


export default ListItem;