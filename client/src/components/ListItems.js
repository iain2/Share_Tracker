import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
=======
const ListColumn = styled.div`
    display: block;
    margin: 5px;
    margin-top: 10px;
    padding: 5px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  min-width: 200px;

  &:hover{
    cursor: pointer;
    background-color: #798086;
  }
`

>>>>>>> 87842b3c81c68a8b5b56bff0858d059ae9849598
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