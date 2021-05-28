import Label from "../Label/Label";

function Select({ name, values, onChange }) {
	return (
		<>
			<Label name={name} label={name} />
			<select
				style={{
					width: "7em",
					height: "2em",
					fontSize: "14px",
					textAlignLast: "center",
				}}
				onChange={onChange}
			>
				{values.map((item, key) => (
					<option className="selection-style" key={key} value={item}>
						{item}
					</option>
				))}
			</select>
		</>
	);
}

export default Select;
