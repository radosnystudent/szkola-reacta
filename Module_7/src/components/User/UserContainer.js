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
                        <div className="user-content" key={index}>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                                to={`/users/${user.login.uuid}`}
                            >
                                <User data={user} />
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}
