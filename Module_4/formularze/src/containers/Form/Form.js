import { useState } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Input from "../../components/Input/Input";
import Radiobutton from "../../components/Radiobutton/Radiobutton";
import Checkbox from "../../components/Checkbox/Checkbox";

import "./styles/Form.css";

const genderData = [
	{
		name: "Male",
	},
	{
		name: "Female",
	},
	{
		name: "Other",
	},
];

const initialErrors = {
	name: "",
	email: "",
	bio: "",
	accepted: "",
};

function useInput(initialValue = "") {
	const [val, setVal] = useState(initialValue);

	const handleInput = (e) => {
		setVal(e.target.value);
	};

	return [val, handleInput];
}

function Form({ changeState }) {
	const [name, setName] = useInput("");
	const [email, setEmail] = useInput("");
	const [bio, setBio] = useInput("");
	const [gender, setGender] = useInput("Male");
	const [accept, setAccept] = useState(false);
	const [errors, setError] = useState(initialErrors);

	const resetForm = () => {
		const resetHelper = { target: { value: "" } };
		setName(resetHelper);
		setEmail(resetHelper);
		setBio(resetHelper);
		setGender({ target: { value: "Male" } });
		setAccept(false);
		setError(initialErrors);
	};

	const submit = (e) => {
		e.preventDefault();
		const checkErrors = { ...initialErrors };
		if (name.length === 0) {
			checkErrors["name"] = "Pole wymagane";
		}
		if (email.length === 0) {
			checkErrors["email"] = "Pole wymagane";
		}
		if (bio.length === 0) {
			checkErrors["bio"] = "Pole wymagane";
		}
		if (!accept) {
			checkErrors["accepted"] = "Pole wymagane";
		}

		if (JSON.stringify(checkErrors) === JSON.stringify(initialErrors)) {
			changeState(true);
			resetForm();
		} else {
			setError(checkErrors);
		}
	};

	return (
		<>
			<form>
				<ul style={{ listStyle: "none" }}>
					<li>
						<Input
							name="name"
							type="text"
							label="name"
							changeValue={setName}
							value={name}
							styles={
								errors["name"].length !== 0
									? { border: "1px solid red" }
									: {}
							}
						/>
						{errors["name"].length === 0 ? (
							<p></p>
						) : (
							<p>{errors["name"]}</p>
						)}
					</li>
					<li>
						<Input
							name="email"
							type="text"
							label="email"
							value={email}
							changeValue={setEmail}
							styles={
								errors["email"].length !== 0
									? { border: "1px solid red" }
									: {}
							}
						/>
						{errors["email"].length === 0 ? (
							<p></p>
						) : (
							<p>{errors["email"]}</p>
						)}
					</li>
					<li>
						<Textarea
							name="bio"
							label="bio"
							changeValue={setBio}
							value={bio}
							styles={
								errors["bio"].length !== 0
									? { border: "1px solid red" }
									: {}
							}
						/>
						{errors["bio"].length === 0 ? (
							<p></p>
						) : (
							<p>{errors["bio"]}</p>
						)}
					</li>
					<li>
						<Radiobutton
							type="radio"
							values={genderData}
							actualValue={gender}
							changeValue={setGender}
						/>
					</li>
					<li>
						<Checkbox
							name="regulamin"
							label="Akceptuję regulamin"
							state={accept}
							changeState={setAccept}
							styles={
								errors["accepted"].length !== 0
									? { outline: "1px solid red" }
									: {}
							}
						/>
						{errors["accepted"].length === 0 ? (
							<p></p>
						) : (
							<p>{errors["accepted"]}</p>
						)}
					</li>
					<li>
						<button onClick={submit}>Submit</button>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Form;
