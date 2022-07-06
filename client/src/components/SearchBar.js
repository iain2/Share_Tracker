import React, { useState } from "react";
import styled from "styled-components";
import '../App.css';

const SearchBarContainer = styled.div`
    margin: 10px;
    padding: 5px;
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
            <form className="search" id="search-form" onSubmit={handleSubmit}>
                <input className="searchTerm" onChange={handleChange} type="text" id="name" name="name" placeholder="Search..." required />
                <button type="submit" class="searchButton">
                    <i class="gg-search"></i>
                </button>
            </form>
        </SearchBarContainer>
    )
}

export default SearchBar;