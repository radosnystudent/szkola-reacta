import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./styles/UserList.css";

export default function UserList({ users, setSelectedUser }) {
    const [activeUser, setActiveUser] = useState(0);

    const handleSelectUser = (user) => {
        setActiveUser(user.id);
        setSelectedUser({ ...user });
    };

    return (
        <>
            <div className="user-list-wrapper">
                {users &&
                    users.length > 0 &&
                    users.map((user, index) => {
                        return (
                            <div
                                key={index}
                                className="user-list"
                                onClick={() => handleSelectUser(user)}
                            >
                                <p className="user-list-item">
                                    {user.name} {user.surname}{" "}
                                </p>
                                {user.id === activeUser ? (
                                    <>
                                        <NavLink to="/user-profile">
                                            <FaIdCard className="edit-icon" />
                                        </NavLink>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
