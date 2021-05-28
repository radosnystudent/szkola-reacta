import Label from "../Label/Label";

function Input({ name, type, label, value, changeValue, styles }) {
	return (
		<>
			<Label name={name} label={label} />
			<input
				type={type}
				id={name}
				value={value}
				onChange={changeValue}
				name={name}
				style={styles}
			/>
		</>
	);
}

export default Input;
