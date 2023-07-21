import React, { useState } from "react";
import Input from "./ui/Input";

const SearchBar = ({ query, onChangeInput }) => {
	const [debouncedValue, setDebouncedValue] = useState(query);

	const debounce = (func, delay) => {
		let timerId;
		return function (...args) {
			if (timerId) {
				clearTimeout(timerId);
			}
			timerId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

	const handleInputChange = e => {
		const value = e.target.value;
		setDebouncedValue(value);
		debouncedOnChangeInput(value);
	};

	const debouncedOnChangeInput = debounce(onChangeInput, 300);

	return (
		<Input
			type="text"
			value={debouncedValue}
			placeholder="Search Todo"
			onChange={handleInputChange}
		/>
	);
};

export default SearchBar;
