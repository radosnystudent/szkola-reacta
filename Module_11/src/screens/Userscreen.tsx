import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { UserReducer } from "../reducers/userReducer";
import { RootState } from "../store";
import UserCard from "../components/UserCard";
import { userDataI } from "../interfaces/userData";
import Button from "../components/Button";

const UserScreen: React.FC = () => {
    const history = useHistory();
    const { loading, errors, users } = useSelector<RootState, UserReducer>(
        (state) => state.users
    );

    return (
        <div className="user-container">
            <div className="footer-content">
                <Button
                    variant="info"
                    label="Strona główna"
                    onClick={() => history.push("/")}
                />
            </div>
            <div className="user-content">
                {loading ? (
                    <p>Loading data...</p>
                ) : errors ? (
                    <p>{errors}</p>
                ) : (
                    users &&
                    users.map((user: userDataI) => {
                        return <UserCard user={user} key={user.login.uuid} />;
                    })
                )}
            </div>
        </div>
    );
};

export default UserScreen;
