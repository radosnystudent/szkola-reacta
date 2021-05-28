import Label from "../Label/Label";

function Checkbox({ name, label, state, changeState, styles }) {
	return (
		<>
			<Label name={name} label={label} />
			<input
				type="checkbox"
				id={name}
				onChange={() => changeState(!state)}
				name={name}
				style={styles}
				checked={state}
			/>
		</>
	);
}

export default Checkbox;
