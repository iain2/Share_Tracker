import React, { useState } from "react";

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
        <>
            <form id="search-form" onSubmit={handleSubmit}>
                <h2>Search</h2>
                <input onChange={handleChange} type="text" id="name" name="name" required />
                <input type='submit' value="Search" id="save" />
            </form>
        </>
    )
}

export default SearchBar