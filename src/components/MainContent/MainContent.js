import React, {useState} from 'react'
import Books from "../Books/Books";
import Search from "../Search/Search";

const MainContent = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <Search search={search} setSearch={setSearch}/>
            <Books className="books-wrapper" search={search}/>
        </>
    )
}

export default MainContent
