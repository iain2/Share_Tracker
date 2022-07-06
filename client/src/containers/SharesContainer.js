import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import styled from "styled-components";
import ShareChart from "../components/ShareChart";

const SharesContainer = ({ searchSymbol, searchedStockList }) => {

    return (
        <>
            <SearchBar searchSymbol={searchSymbol} />
            <SearchResultsList searchedStockList={searchedStockList} />
            <ShareChart/>
        </>
    )
};


export default SharesContainer