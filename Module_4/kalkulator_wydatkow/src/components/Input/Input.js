import Label from "../Label/Label";
import "./styles/Input.css";

function Input({ type, name, onChange }) {
	return (
		<>
			<Label label={name} labelFor={name} />
			<input type={type} name={name} onChange={onChange} />
		</>
	);
}

export default Input;
