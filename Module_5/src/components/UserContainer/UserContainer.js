import React, { useEffect, useRef, useState } from "react";
import { Switch, Route } from "react-router-dom";

import getUsers from "../../Actions/users/getUsers";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import User from "./User";

export default function UserContainer() {
    const [users, setUsers] = useState([]);
    const [initialUsers, setInitialUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const search = useRef();

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data.users);
                setInitialUsers(data.users);
            })
            .catch((error) => console.log(error, " JSON error "));
    }, []);

    const handleEnterDown = (e) => {
        if (e.key === "Enter") {
            const filterUsers = users.filter((user) => {
                const fullname = user.name + " " + user.surname;
                return fullname.includes(search.current.value);
            });
            setUsers(filterUsers);
        }
    };

    const handleReset = () => {
        setUsers(initialUsers);
        setSelectedUser({});
    };

    return (
        <>
            <Switch>
                <Route path="/users">
                    <div className="user-list-container">
                        <div>
                            <UserSearch
                                handleKey={handleEnterDown}
                                handleReset={handleReset}
                                ref={search}
                            />
                        </div>
                        <div>
                            <UserList
                                users={users}
                                setSelectedUser={setSelectedUser}
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/user-profile">
                    {selectedUser ? (
                        <User user={selectedUser} handleReset={handleReset} />
                    ) : (
                        <></>
                    )}
                </Route>
            </Switch>
        </>
    );
}
