import React, { useState } from "react";
import Input from "./ui/Input";

import styles from "./AddToDoForm.module.css";

const AddToDoForm = ({ onAddToDo }) => {
	const [title, setTitle] = useState("");

	const handleFormSubmit = e => {
		e.preventDefault();

		if (!title) return;

		const newTodo = {
			title,
			isCompleted: false,
			id: Math.floor(Math.random() * 10000),
		};

		onAddToDo(newTodo);

		setTitle("");
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className={styles.addToDoForm}
		>
			<Input
				type="text"
				placeholder="Enter a Todo"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<button
				className={styles.addButton}
				type="submit"
				disabled={!title}
			>
				ADD
			</button>
		</form>
	);
};

export default AddToDoForm;
