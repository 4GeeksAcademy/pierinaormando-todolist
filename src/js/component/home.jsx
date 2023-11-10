import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState ("");

	return (
		<div className="container text-center mt-5">
			<h1>todos</h1>
			<div>
			<input type="text" onChange={(e)=> setTarea(e.target.value)} value={tarea} placeholder="What needs to be done?"/> 
			</div>	
			<h3>La tarea es {tarea}</h3>
			<button className="btn-primary mt-3" onClick={ () =>  {
				setTarea("")
			}}>Borrar Tarea</button>
		</div>
	);
};

export default Home;