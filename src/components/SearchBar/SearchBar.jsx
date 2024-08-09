import './SearchBar.css'

const SearchBar = () => {
    return (
        <>
            <form className="search-flex">
                <input readOnly/>
                <button className="srch-btn" >Search</button>
            </form>
        </>
    )
}

export default SearchBar