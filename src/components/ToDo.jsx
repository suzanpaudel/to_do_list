import React from "react";

import styles from "./ToDo.module.css";

const ToDo = ({ todo, onChangeToDoStatus, onDeleteToDo }) => {
	const { id, title, isCompleted } = todo;
	return (
		<li className={isCompleted ? `${styles.completed}` : null}>
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={() => onChangeToDoStatus(id)}
			/>
			{title}
			<button onClick={() => onDeleteToDo(id)}>&times;</button>
		</li>
	);
};

export default ToDo;
