import { FaTrash } from "react-icons/fa";

import "./styles/List.css";

function List({ data, removeItem }) {
	return (
		<>
			<div className="grid-container">
				<div className="grid-item">
					<h2>Wydatki:</h2>
					<ul>
						{data.map((item, key) => (
							<>
								{item.type === "Wydatki" ? (
									<>
										<li key={key}>
											{item.category}: {item.name} -{" "}
											{item.price}zł
											{
												<FaTrash
													className="icon-button"
													onClick={(e) =>
														removeItem(key)
													}
												/>
											}
										</li>
									</>
								) : (
									""
								)}
							</>
						))}
					</ul>
				</div>
				<div className="grid-item">
					<h2>Przychody:</h2>
					<ul>
						{data.map((item, key) => (
							<>
								{item.type === "Przychody" ? (
									<>
										<li key={key}>
											{item.category}: {item.name} -{" "}
											{item.price}zł
											{
												<FaTrash
													className="icon-button"
													onClick={(e) =>
														removeItem(key)
													}
												/>
											}
										</li>
									</>
								) : (
									""
								)}
							</>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default List;
