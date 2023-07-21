import React, { useState } from "react";
import ToDo from "./ToDo";
import AddToDoForm from "./AddToDoForm";

const ToDoList = () => {
	const [todos, setToDos] = useState([
		{
			id: "todo1",
			title: "Buy Vegetables",
			isCompleted: true,
		},
		{
			id: "todo2",
			title: "Buy Fruits",
			isCompleted: false,
		},
		{
			id: "todo3",
			title: "Buy Book",
			isCompleted: true,
		},
	]);

	const handleToDoAdd = todo => {
		setToDos(todos => [...todos, todo]);
	};

	const handleToDoDelete = id => {
		setToDos(todos => todos.filter(todo => todo.id !== id));
	};

	const handleToDoToggle = id => {
		setToDos(todos => todos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
	};

	return (
		<div>
			<h4>To Do List</h4>
			<AddToDoForm onAddToDo={handleToDoAdd} />
			<ul>
				{todos.map(todo => (
					<ToDo
						key={todo.id}
						todo={todo}
						onChangeToDoStatus={handleToDoToggle}
						onDeleteToDo={handleToDoDelete}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
