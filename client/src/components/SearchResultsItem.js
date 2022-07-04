import React from "react";
import styled from "styled-components";

const Results = styled.div`
    background-color: #2E6171;
    color: #FFFFFF;
    border: 2px solid #220C10;
    margin-top: 5px;
`

const SearchResultItem = ({ stock }) => {
    return (
        <Results>
            <p><b>{stock["2. name"]}</b></p>
            <p>{stock["1. symbol"]}</p>
        </Results>
    )

}

export default SearchResultItem