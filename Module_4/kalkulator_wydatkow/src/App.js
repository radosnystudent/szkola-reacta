import { useState } from "react";

import List from "./containers/List/List";
import Form from "./containers/Form/Form";

import "./App.css";

let data = [
	{
		name: "Warzywa",
		price: 20,
		category: "Jedzenie",
		type: "Wydatki",
	},

	{
		name: "Kieszonkowe",
		price: 40,
		category: "Niezarobkowe",
		type: "Przychody",
	},
];

if (!("mydata" in localStorage)) {
	localStorage.setItem("mydata", JSON.stringify(data));
} else {
	data = JSON.parse(localStorage.getItem("mydata") || "[]");
}

function calculate() {
	const prices = [0, 0];
	data.map((item, key) =>
		item.type === "Wydatki"
			? (prices[0] += parseInt(item.price))
			: (prices[1] += parseInt(item.price))
	);

	return prices[1] - prices[0];
}

function addData(name, price, category, type) {
	data.push({ name: name, price: price, category: category, type: type });
	localStorage.removeItem("mydata");
	localStorage.setItem("mydata", JSON.stringify(data));
}

function App() {
	const [myMoney, calculateMoney] = useState(calculate());

	const update = (name, price, category, type) => {
		addData(name, price, category, type);
		calculateMoney(calculate());
	};

	const removeItemFromList = (index) => {
		if (data.length === 1) {
			data.pop();
		} else {
			data.splice(index, 1);
		}
		localStorage.removeItem("mydata");
		localStorage.setItem("mydata", JSON.stringify(data));
		calculateMoney(calculate());
	};

	return (
		<>
			<div className="container">
				<div>
					{myMoney < 0 ? (
						<h2 className="danger">Aktualny stan: {myMoney}</h2>
					) : (
						<h2 className="calm">Aktualny stan: {myMoney}</h2>
					)}
				</div>
				<div>
					<List data={data} removeItem={removeItemFromList} />
				</div>
				<div>
					<h3>Wprowadź nowy wydatek/przychód</h3>
					<Form updateData={update} />
				</div>
			</div>
		</>
	);
}

export default App;
