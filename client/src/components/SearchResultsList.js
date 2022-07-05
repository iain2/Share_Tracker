import React from "react";
import SearchResultItem from "./SearchResultsItem";
import styled from "styled-components";

const Results = styled.div`
    background-color: #2E6171;
    color: #FFFFFF;
    border: 2px solid #220C10;
    margin-top: 5px;
`

const SearchResultsList = ({ searchedStockList }) => {

    const searchResultNodes = searchedStockList.map((stock) => {
        return <SearchResultItem stock={stock} key={stock._id} />
    })


    return (
        <Results>
            {searchResultNodes}
        </Results>
    )
}


export default SearchResultsList