import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
    color: #220C10;
    margin: 10px;
    padding: 5px;
`

const Input = styled.input`
  background-color: #2E6171;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
`

const SearchBar = ({ searchSymbol }) => {

    const [symbol, setSymbol] = useState("")

    const handleChange = (e) => {
        const newData = e.target.value
        setSymbol(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchSymbol(symbol)
    }
    


    return (
        <SearchBarContainer>
            <form id="search-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" id="name" name="name" required />
                <Input type='submit' value="Search" id="save" />
            </form>
        </SearchBarContainer>
    )
}

export default SearchBar