import { useState } from "react";

import Form from "./containers/Form/Form";

import "./App.css";

function App() {
	const [isSubmited, changeState] = useState(false);

	return (
		<div>
			<Form changeState={changeState} />
			{isSubmited ? (
				<h3 style={{ padding: "20px" }}>
					dziekujemy za wyslanie formularza
				</h3>
			) : (
				<p></p>
			)}
		</div>
	);
}

export default App;

/*const [bill, setBill] = useState("");
{!!bill ? (
			<>
				<div>
					<h3>Do zapłaty: {bill}</h3>
				</div>
			</>
		) : (
			<Form setValue={setBill} />
		)} */
