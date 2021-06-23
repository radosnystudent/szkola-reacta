import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { getUsers, resetUsers, addUser } from "../actions/userActions";
import { addMessage } from "../actions/messageActions";

const Homescreen: React.FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const dispatchMsg = (type: string, msg: string) => {
        dispatch(addMessage(type, msg));
    };

    const fetchUsers = () => {
        dispatch(getUsers());
        dispatchMsg("info", "Ładowanie użytkowników");
    };

    const addNewUser = () => {
        dispatch(addUser());
        dispatchMsg("warning", "Dodanie użytkownika");
    };

    const resetUserList = () => {
        dispatch(resetUsers());
        dispatchMsg("danger", "Czyszczenie listy użytkowników");
    };

    return (
        <div className="homepage-container">
            <PageTitle title="Homepage" />
            <Button
                label="Przejdź do listy użytkowników"
                variant="info"
                onClick={() => history.push("/users")}
            />
            <Button
                label="Pobierz użytkowników"
                variant="action"
                onClick={fetchUsers}
            />
            <Button
                label="Dodaj użytkownika"
                variant="action"
                onClick={addNewUser}
            />
            <Button
                label="Zresetuj listę użytkowników"
                variant="action"
                onClick={resetUserList}
            />
        </div>
    );
};

export default Homescreen;
