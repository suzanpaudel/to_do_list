import React, { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
	const [todos, setToDos] = useState([
		{
			id: "todo1",
			title: "Buy Vegetables",
		},
		{
			id: "todo2",
			title: "Buy Fruits",
		},
		{
			id: "todo3",
			title: "Buy Book",
		},
	]);
	return (
		<div>
			<h4>To Do List</h4>
			<ul>
				{todos.map(todo => (
					<ToDo
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
