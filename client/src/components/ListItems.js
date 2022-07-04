import React from "react";

const ListItem = ({ stock, getSymbol }) => {

    const handleClick = (event) => {
        getSymbol(event.target.value)
    }

    return (
        <>
            <button onClick={handleClick} value={stock.symbol}>{stock.name}</button>
        </>
    );
};

export default ListItem;