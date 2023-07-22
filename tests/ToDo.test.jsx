import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("Delete a todo", () => {
	const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<App />);

	const todoInput = getByPlaceholderText("Enter a Todo");
	const addButton = getByText("ADD");

	fireEvent.change(todoInput, { target: { value: "Buy vegetables" } });
	fireEvent.click(addButton);

	const deleteButton = getByTestId("delete-button");
	fireEvent.click(deleteButton);

	expect(queryByText("Buy vegetables")).toBeNull();
});
