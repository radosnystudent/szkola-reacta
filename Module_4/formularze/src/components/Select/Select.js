import Label from "../Label/Label";

function getSelect(e, changeValue) {
	changeValue(e.target.value);
}

function Select({ name, changeValue, values }) {
	return (
		<>
			<Label name={name} label={name} />
			<select
				id={name}
				name={name}
				onChange={(e) => getSelect(e, changeValue)}
			>
				{values.map((item, key) => (
					<option key={key} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
		</>
	);
}

export default Select;
