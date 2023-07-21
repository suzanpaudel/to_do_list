import React from "react";

import styles from "./Stats.module.css";

const Stats = ({ todos }) => {
	const totalTodos = todos.length;
	const completedTodos = todos.filter(todo => todo.isCompleted);
	const totalCompletedTodos = completedTodos.length;
	const completionPercent = Math.round((totalCompletedTodos / totalTodos) * 100);

	return (
		<footer className={styles.stats}>
			<em>
				{totalTodos === 0 ? (
					"Start adding to dos"
				) : (
					<>
						You have {totalTodos} to dos on your list, and you already completed {totalCompletedTodos} (
						{completionPercent}%)
					</>
				)}
			</em>
		</footer>
	);
};

export default Stats;
