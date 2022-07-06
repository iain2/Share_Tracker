import React from "react";
import styled from "styled-components";
import { postPortfolio } from "../PortfolioService";

const Results = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ffffff;
`

const Button = styled.button`
  background-color: #798086;
  border: none;
  color: #220c10;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;

  &:hover{
    cursor: pointer;
    color: #798086;
    background-color: #220c10;
    }
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
            <Button onClick={handleClick}> Add to Portfolio </Button>
        </Results>

    )

}

export default SearchResultItem