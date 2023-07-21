import React from "react";

import styles from "./ToDo.module.css";

const ToDo = ({ todo, onChangeToDoStatus }) => {
	const { id, title, isCompleted } = todo;
	return (
		<li className={isCompleted ? `${styles.completed}` : null}>
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={() => onChangeToDoStatus(id)}
			/>
			{title}
		</li>
	);
};

export default ToDo;
