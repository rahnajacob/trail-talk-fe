import { useState } from "react"
import './SearchBar.css'

const SearchBar = () => {
    return (
        <>
            <form className="search-flex">
                <input value='search'/>
                <button className="srch-btn">Search</button>
            </form>
        </>
    )
}

export default SearchBar