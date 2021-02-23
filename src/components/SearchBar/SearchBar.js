import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar({handleSearchSubmit}) {
    const [term, setTerm] = useState('')

    const handleInputChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSearchSubmit(e, term)}>
            <input onChange={handleInputChange} value={term}></input>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}
