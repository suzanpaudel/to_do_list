import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import SearchBar from "./SearchBar";
import AddToDoForm from "./AddToDoForm";
import FilterOptions from "./FilterOptions";
import { ALL, COMPLETED, INCOMPLETE } from "../constants";

import styles from "./ToDoList.module.css";
import Header from "./ui/Header";

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
			<Header>
				<h4 className={styles.heading}>To Do List</h4>
				<div className={styles.filterOptions}>
					<SearchBar
						query={searchQuery}
						onChangeInput={handleSearchQueryChange}
					/>
					<FilterOptions
						option={filterOption}
						onChangeOption={handleFilterOptionChange}
					/>
				</div>
			</Header>
			<section className={styles.mainSection}>
				<div className={styles.todoSection}>
					<AddToDoForm onAddToDo={handleToDoAdd} />
					<ul className={styles.todoList}>
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
			</section>
		</div>
	);
};

export default ToDoList;
