import React, { useState } from "react";
import { ALL, COMPLETED, INCOMPLETE } from "../constants";

const FilterOptions = ({ option, onChangeOption }) => {
	return (
		<select
			value={option}
			onChange={e => onChangeOption(e.target.value)}
		>
			<option value={ALL}>All</option>
			<option value={COMPLETED}>Completed</option>
			<option value={INCOMPLETE}>Incomplete</option>
		</select>
	);
};

export default FilterOptions;
