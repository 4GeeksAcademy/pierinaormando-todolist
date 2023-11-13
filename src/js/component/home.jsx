import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, setToDos] = useState([]);
	const [tarea, setsetTarea] = useState(null);

	const changeInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const addInputValue = (e) => {
		if (e.key === "Enter") {
			//para agregar mas elementos al array sin modificar el estado del anterior
			setToDos([...toDos, inputValue]);
			setInputValue("");
		}
	};

	const deleteTask = (index) => {
		setToDos(toDos.filter((t, currentIndex) => index !== currentIndex));
	};

	return (
		<div className="text-center container">
			<h1>ToDoList</h1>
			<ul>
				<li>
					<input
						type="text"
						placeholder="What do you need to do?"
						value={inputValue}
						onChange={changeInputValue}
						onKeyDown={addInputValue}
					/>
				</li>
				{toDos.map((t, index) => (
					<li
						key={index}
						onMouseEnter={() => setsetTarea(index)}
						onMouseLeave={() => setsetTarea(null)}
					>
						{t}
						{tarea === index && (
							<i
								className="far fa-trash-alt m-1"
								onClick={() => deleteTask(index)}
							></i>
						)}
					</li>
				))}
			</ul>
			<div className="tasks">{toDos.length} item left</div>
		</div>
	);
};

export default Home;
