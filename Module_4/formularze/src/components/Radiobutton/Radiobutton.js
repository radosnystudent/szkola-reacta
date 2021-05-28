function Radiobutton({ type, values, actualValue, changeValue }) {
	return (
		<>
			<div>
				{values.map((item, key) => (
					<>
						<input
							type={type}
							value={item.name}
							key={item.name}
							name={item.name}
							checked={actualValue === item.name ? true : false}
							// onChange={(e) => changeValue(e.target.value)}
							onChange={changeValue}
						/>
						{item.name}
					</>
				))}
			</div>
		</>
	);
}

export default Radiobutton;
