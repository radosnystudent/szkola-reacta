import { useState } from "react";

import Input from "../../components/Input/Input";
import Radiobutton from "../../components/Radiobutton/Radiobutton";
import Select from "../../components/Select/Select";

import "./styles/Form.css";

const categories = {
	Wydatki: ["Jedzenie", "Opłaty", "Rozrywka"],
	Przychody: ["Praca", "Niezarobkowe", "Lokaty"],
};

function useInput(initialValue = "") {
	const [val, setVal] = useState(initialValue);

	const myInputHandler = (e) => {
		setVal(e.target.value);
	};

	return [val, myInputHandler];
}

function Form({ updateData }) {
	const [name, setName] = useInput("");
	const [price, setPrice] = useInput(0);
	const [type, setType] = useInput("Przychody");
	const [category, setCategory] = useInput("");

	const submit = (e, updateData) => {
		e.preventDefault();
		updateData(name, price, category, type);
	};

	return (
		<>
			<form className="form-container">
				<ul>
					<li>
						<Input type="text" name="Nazwa" onChange={setName} />
					</li>
					<li>
						<Input type="number" name="Kwota" onChange={setPrice} />
					</li>
					<li>
						<Radiobutton
							type="radio"
							name="category"
							values={["Przychody", "Wydatki"]}
							actualValue={type}
							onChange={setType}
						/>
					</li>
					<li>
						<Select
							name={"Kategorie"}
							onChange={setCategory}
							values={
								type === "Przychody"
									? categories["Przychody"]
									: categories["Wydatki"]
							}
						/>
					</li>
					<li>
						<button
							className="submit-button"
							onClick={(e) => submit(e, updateData)}
						>
							Dodaj
						</button>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Form;
