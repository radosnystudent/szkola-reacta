import "./styles/Label.css";

function Label({ labelFor, label }) {
	return <label htmlFor={labelFor}>{label}</label>;
}

export default Label;
