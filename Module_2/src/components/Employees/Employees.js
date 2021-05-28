import { useState } from "react";

import employeesData from "./data/employeesData";
import "./styles/Employees.css";

function Employees() {
    const [actualData, changeEmployee] = useState({});

    return (
        <>
            <div className="data-container">
                <ul className="item-list">
                    {employeesData.map((item, key) => (
                        <li
                            className="data-item"
                            key={key}
                            onClick={() => changeEmployee(employeesData[key])}
                        >
                            Imię: {item.imię}
                            <br />
                            Nazwisko: {item.nazwisko}
                        </li>
                    ))}
                </ul>

                {Object.keys(actualData).length !== 0 ? (
                    <div className="item-list second-part">
                        <p>
                            Wiek: {actualData.wiek}
                            <br />
                            Stanowisko: {actualData.stanowisko}
                            <br />
                            Płaca: {actualData.płaca}
                        </p>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
}

export default Employees;
