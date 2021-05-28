function Label({ name, label }) {
	return (
		<label style={{ padding: "5px" }} htmlFor={name}>
			{label}
		</label>
	);
}

export default Label;
