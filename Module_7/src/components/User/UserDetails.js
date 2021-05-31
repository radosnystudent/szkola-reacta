import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import User from "./User";
import UserMap from "./UserMap";

import "./styles/UserContainer.scss";

export default function UserDetails({ users }) {
    const { userId } = useParams();

    return (
        <div>
            {Object.keys(users).length !== 0 && users.constructor !== Object && (
                <>
                    <div className="user-container">
                        {users.map((user, index) => {
                            return user.login.uuid === userId ? (
                                <div key={user.id.value}>
                                    <div className="user-content">
                                        <User data={user} />
                                    </div>
                                    <UserMap user={user} />
                                </div>
                            ) : null;
                        })}
                    </div>
                </>
            )}
            <Button />
        </div>
    );
}
