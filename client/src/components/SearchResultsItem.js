import React from "react";

import styled from "styled-components";
import { postPortfolio } from "../PortfolioService";

const Results = styled.div`
    background-color: #2E6171;
    color: #FFFFFF;
    border: 2px solid #220C10;
    margin-top: 5px;
`


const SearchResultItem = ({ stock }) => {



    const handleClick = () => {
        console.log(stock)
        const formattedStock = {

            "symbol": stock["1. symbol"],
            "name": stock["2. name"],
            "type": stock["3. type"],
            "region": stock["4. region"],
            "marketOpen": stock["5. marketOpen"],
            "marketClose": stock["6. marketClose"],
            "timezone": stock["7. timezone"],
            "currency": stock["8. currency"],
            "matchScore": stock["9. matchScore"]
        }
        postPortfolio(formattedStock)
    }




    return (
        <Results>
            <p><b>{stock["2. name"]}</b></p>
            <p>{stock["1. symbol"]}</p>
            <button onClick={handleClick}> Add to Portfolio </button>
            <hr></hr>
        

        </Results>

    )

}

export default SearchResultItem