import React from "react";

const SearchBar = ({ query, onChangeInput }) => {
	return (
		<div>
			<input
				type="text"
				value={query}
				placeholder="Search Todo"
				onChange={e => onChangeInput(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
