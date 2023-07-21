import React from "react";

import styles from "./Input.module.css";

const Input = ({ type, value, placeholder, onChange }) => {
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className={styles.input}
		/>
	);
};

export default Input;
