
// CHILD OF TopBar COMPONENT

import React from 'react'
import search from "./images/search.png";

const SearchBox = () => {
	return (
		<div className="searchBox">
			<img src={search} alt="" />
			<input type="text" placeholder="Search..."></input>
        </div>
	)
}

export default SearchBox
