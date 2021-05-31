import { Link } from "react-router-dom";
import User from "./User";
import "./styles/UserContainer.scss";

export default function UserContainer({ users }) {
    return (
        <div className="user-container">
            {users &&
                users.length > 0 &&
                users.map((user, index) => {
                    return (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={user.login.uuid}
                            key={index}
                        >
                            <User data={user} />
                        </Link>
                    );
                })}
        </div>
    );
}
