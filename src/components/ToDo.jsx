import React from "react";

const ToDo = ({ todo }) => {
	const { title } = todo;
	return <li>{title}</li>;
};

export default ToDo;
