import React from "react";
import SearchResultItem from "./SearchResultsItem";
import styled from "styled-components";

const SearchResultsList = ({ searchedStockList }) => {

    const searchResultNodes = searchedStockList.map((stock) => {
        return <SearchResultItem stock={stock} key={stock._id} />
    })


    return (
        <>
            {searchResultNodes}
        </>
    )
}


export default SearchResultsList