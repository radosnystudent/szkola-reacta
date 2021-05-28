import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

import "./styles/Form.css";

const vatData = [
	{
		name: "23%",
		value: 23,
	},
	{
		name: "12%",
		value: 12,
	},
	{
		name: "19%",
		value: 19,
	},
];

function submitForm(e, fprice, ftip, fvat, setValue, setError) {
	e.preventDefault();
	const price = parseInt(fprice);
	const tip = parseInt(ftip);
	const vat = parseInt(fvat);
	if (price > 0 && tip >= 0) {
		const sumCost = price + tip;
		const calculateVat = (sumCost * vat) / 100;
		setValue(sumCost + calculateVat);
		setError(false);
	} else {
		setError(true);
	}
}

function RestaurantForm({ setValue }) {
	const [price, setPrice] = useState("");
	const [tip, setTip] = useState("");
	const [vat, setVat] = useState("23");
	const [error, setError] = useState(false);

	return (
		<>
			<form>
				<ul style={{ listStyle: "none" }}>
					<li>
						<Input
							type="text"
							name="Kwota"
							label="Kwota"
							changeValue={setPrice}
						/>
					</li>
					<li>
						<Input
							type="text"
							name="Napiwek"
							label="Napiwek"
							changeValue={setTip}
						/>
					</li>
					<li>
						<Select
							name="Vat"
							changeValue={setVat}
							values={vatData}
						/>
					</li>
					<li>
						<button
							type="submit"
							onClick={(e) =>
								submitForm(
									e,
									price,
									tip,
									vat,
									setValue,
									setError
								)
							}
						>
							Submit
						</button>
					</li>
				</ul>
				<div style={{ marginLeft: "20px" }}>
					{!!error ? (
						<p>Kwota musi być większa od 0, a napiwek nieujemny.</p>
					) : (
						<p></p>
					)}
				</div>
			</form>
		</>
	);
}

export default RestaurantForm;
