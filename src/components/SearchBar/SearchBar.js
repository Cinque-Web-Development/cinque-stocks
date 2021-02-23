import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar({handleSearchSubmit}) {
    const [term, setTerm] = useState('')

    const handleInputChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-form">
            <form onSubmit={(e) => handleSearchSubmit(e, term)}>
            <input required className="search-input" onChange={handleInputChange} value={term}></input>
            <button className="search-btn" type="submit">Search</button>
            </form>
        </div>
    )
}
