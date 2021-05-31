import { useState, useEffect } from "react";

import Loading from "../Loading/Loading";
import UserInfo from "./UserInformation";

import "./styles/User.scss";

const formatDate = (originalDate) => {
    /* example date format: 2008-10-01T12:12:49.064Z
    I need to return 01-10-2008 from this */

    // First I'm cutting everything after "T" (and including T)
    // so I get 2008-10-01 and then spilt it to [year, month, day]
    const cuttedData = originalDate.split("T")[0].split("-");
    return `${cuttedData[2]}/${cuttedData[1]}/${cuttedData[0]}`;
};

const getUserData = (user) => {
    let returnData = {};
    returnData["name"] = user.name.first ? user.name.first : "Brak imienia";
    returnData["surname"] = user.name.last ? user.name.last : "Brak nazwiska";
    returnData["email"] = user.email;
    returnData["address"] = user.location
        ? user.location.city +
          ", " +
          user.location.street.name +
          " " +
          user.location.street.number
        : "Brak adresu";
    returnData["picture"] = user.picture.large;
    returnData["registered"] = formatDate(user.registered.date);

    return returnData;
};

export default function User({ data }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(getUserData(data));
    }, [data]);

    return (
        <div>
            {userData ? (
                <div className="user-content">
                    <div className="user-header">
                        <img
                            alt={`${userData.name} ${userData.surname} profile`}
                            src={userData.picture}
                        />
                        <h4 className="username">
                            {userData.name} {userData.surname}
                        </h4>
                    </div>

                    <div className="user-info-container">
                        <UserInfo userData={userData} />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}
