import React from "react";

const SearchResultItem = ({ stock }) => {
    return (
        <>
            <hr></hr>
            <p>{stock["2. name"]}</p>
            <p>{stock["1. symbol"]}</p>
            <hr></hr>
        </>
    )

}

export default SearchResultItem