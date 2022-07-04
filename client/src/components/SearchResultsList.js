import React from "react";
import SearchResultItem from "./SearchResultsItem";

const SearchResultsList = ({ searchedStockList }) => {

    const searchResultNodes = searchedStockList.map((stock) => {
        return <SearchResultItem stock={stock} key={stock._id} />
    })


    return (
        <>
            <h1>SearchResultsList</h1>
            {searchResultNodes}
        </>
    )
}


export default SearchResultsList