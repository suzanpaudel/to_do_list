import React from "react";

import styles from "./ToDo.module.css";

const ToDo = ({ todo, onChangeToDoStatus, onDeleteToDo }) => {
	const { id, title, isCompleted } = todo;
	return (
		<li className={`${styles.todo} ${isCompleted && styles.completed}`}>
			<input
				type="checkbox"
				checked={isCompleted}
				className={styles.checkbox}
				onChange={() => onChangeToDoStatus(id)}
			/>
			{title}
			<button
				className={styles.deleteButton}
				onClick={() => onDeleteToDo(id)}
				data-testid="delete-button"
			>
				&times;
			</button>
		</li>
	);
};

export default ToDo;
