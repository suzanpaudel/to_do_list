import React from "react";
import { ALL, COMPLETED, INCOMPLETE } from "../constants";

import styles from "./FilterOptions.module.css";

const FilterOptions = ({ option, onChangeOption }) => {
	return (
		<select
			className={styles.filterOptions}
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
