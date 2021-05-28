import Label from "../Label/Label";

function Textarea({ name, label, changeValue, value, styles }) {
	return (
		<>
			<Label name={name} label={label} />
			<textarea
				// onChange={(e) => changeValue(e.target.value)}
				onChange={changeValue}
				value={value}
				style={{ resize: "none", ...styles }}
			/>
		</>
	);
}

export default Textarea;
