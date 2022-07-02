import React from "react";
import ListItem from "./ListItems";

const ShareList = ({ portfolio, getSymbol }) => {



    const portfolioNodes = portfolio.map((stock) => {
        return <ListItem stock={stock} key={stock._id} getSymbol={getSymbol} />
    })


    return (

        <>
            <p>{portfolioNodes}</p>



        </>
    )
};

export default ShareList;