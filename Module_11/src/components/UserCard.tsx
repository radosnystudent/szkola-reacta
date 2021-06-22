import React from "react";

import {userDataI} from "../interfaces/userData";

interface Props {
    user: userDataI
}

const UserCard: React.FC<Props> = ({user}) => {

    return (
        <div className="user-card">
            <div className="user-card-top">
                <img src={user.picture.large} alt="profile"/>
                <h3 className="user-card-title">{`${user.name.title}. ${user.name.first} ${user.name.last}`}</h3>
            </div>
            <p style={{textTransform: "capitalize"}}>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}

export default UserCard;