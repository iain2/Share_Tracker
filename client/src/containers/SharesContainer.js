import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import styled from "styled-components";

<<<<<<< HEAD
const SharesContainer = () => {

    return (
        <>
            <h1>SharesContainer</h1>
=======
const SharesContainer = ({ searchSymbol, searchedStockList }) => {

    return (
        <>
            <SearchBar searchSymbol={searchSymbol} />
                <SearchResultsList searchedStockList={searchedStockList} />
>>>>>>> 87842b3c81c68a8b5b56bff0858d059ae9849598
        </>
    )
};

export default SharesContainer