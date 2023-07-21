import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import AddToDoForm from "./AddToDoForm";
import FilterOptions from "./FilterOptions";
import { ALL, COMPLETED, INCOMPLETED } from "../constants";

const ToDoList = () => {
	const [todos, setTodos] = useState([
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

	const [filteredTodos, setFilteredTodos] = useState(todos);

	const [filterOption, setFilterOption] = useState(ALL);

	useEffect(() => {
		const filteredTodos = todos.filter(todo => {
			if (filterOption === COMPLETED) {
				return todo.isCompleted;
			} else if (filterOption === INCOMPLETED) {
				return !todo.isCompleted;
			} else {
				return true;
			}
		});

		setFilteredTodos(filteredTodos);
	}, [filterOption, todos]);

	const handleToDoAdd = todo => {
		setTodos(todos => [...todos, todo]);
	};

	const handleToDoDelete = id => {
		setTodos(todos => todos.filter(todo => todo.id !== id));
	};

	const handleToDoToggle = id => {
		setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
	};

	const handleFilterOptionChange = value => {
		setFilterOption(value);
	};

	return (
		<div>
			<h4>To Do List</h4>
			<FilterOptions
				option={filterOption}
				onChangeOption={handleFilterOptionChange}
			/>
			<AddToDoForm onAddToDo={handleToDoAdd} />
			<ul>
				{filteredTodos.map(todo => (
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
