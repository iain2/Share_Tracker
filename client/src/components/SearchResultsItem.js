import React from "react";

const SearchResultItem = ({ stock }) => {
    return (
        <>
            <hr></hr>
            <p><b>{stock["2. name"]}</b></p>
            <p>{stock["1. symbol"]}</p>
            <hr></hr>
        </>
    )

}

export default SearchResultItem