import React from "react";
import styled from "styled-components";

const ListColumn = styled.div`
    display: block;
    margin-top: 10px;
    padding: 5px;
    /* background-color: #2E6171; */
`

const Button = styled.button`
  background-color: #2E6171;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover{cursor: pointer;}
`

const ListItem = ({ stock, getSymbol }) => {

    const handleClick = (event) => {
        getSymbol(event.target.value)
    }

    return (
        <ListColumn>
            <Button onClick={handleClick} value={stock.symbol}>{stock["name"]}</Button>
        </ListColumn>
    );
};


export default ListItem;