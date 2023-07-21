import React from "react";
import Input from "./ui/Input";

const SearchBar = ({ query, onChangeInput }) => {
	return (
		<Input
			type="text"
			value={query}
			placeholder="Search Todo"
			onChange={e => onChangeInput(e.target.value)}
		/>
	);
};

export default SearchBar;
