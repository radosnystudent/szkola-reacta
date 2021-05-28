function Radiobutton({ values, type, name, actualValue, onChange }) {
	return (
		<>
			<div>
				{values.map((item, key) => (
					<>
						<input
							key={key}
							type={type}
							name={name}
							value={item}
							checked={actualValue === item ? true : false}
							onChange={onChange}
						/>
						{item}
					</>
				))}
			</div>
		</>
	);
}

export default Radiobutton;
