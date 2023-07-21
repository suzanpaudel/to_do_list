import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import AddToDoForm from "./AddToDoForm";
import FilterOptions from "./FilterOptions";
import { ALL, COMPLETED, INCOMPLETE } from "../constants";
import SearchBar from "./SearchBar";

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
	const [searchQuery, setSearchQuery] = useState("");
	const [filterOption, setFilterOption] = useState(ALL);

	const [finalTodos, setFinalTodos] = useState(todos);

	useEffect(() => {
		const finalTodos = todos.filter(todo => {
			if (filterOption === COMPLETED) {
				return todo.isCompleted;
			} else if (filterOption === INCOMPLETE) {
				return !todo.isCompleted;
			} else {
				return true;
			}
		});

		const searchedAndFilteredTodos = finalTodos.filter(todo =>
			todo.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setFinalTodos(searchedAndFilteredTodos);
	}, [searchQuery, filterOption, todos]);

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

	const handleSearchQueryChange = inputText => {
		setSearchQuery(inputText);
	};

	return (
		<div>
			<h4>To Do List</h4>
			<SearchBar
				query={searchQuery}
				onChangeInput={handleSearchQueryChange}
			/>
			<FilterOptions
				option={filterOption}
				onChangeOption={handleFilterOptionChange}
			/>
			<AddToDoForm onAddToDo={handleToDoAdd} />
			<ul>
				{finalTodos.map(todo => (
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
