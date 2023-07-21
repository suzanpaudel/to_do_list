import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import App from "../src/App";

test("Adding ToDo", () => {
	const { getByPlaceholderText, getByText } = render(<App />);

	const todoInput = getByPlaceholderText("Enter a Todo");
	const addButton = getByText("ADD");

	fireEvent.change(todoInput, { target: { value: "Buy vegetables" } });
	fireEvent.click(addButton);

	expect(getByText("Buy vegetables")).toBeInTheDocument();
});
