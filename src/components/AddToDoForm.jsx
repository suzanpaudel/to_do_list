import React, { useState } from "react";

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
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				placeholder="Enter a todo"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<button
				type="submit"
				disabled={!title}
			>
				ADD
			</button>
		</form>
	);
};

export default AddToDoForm;
