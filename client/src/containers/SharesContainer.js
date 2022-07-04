import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

const SharesContainer = ({ searchSymbol, searchedStockList }) => {





    return (
        <>
            <SearchBar searchSymbol={searchSymbol} />
            <SearchResultsList searchedStockList={searchedStockList} />



        </>
    )
};


export default SharesContainer