import { useParams } from "react-router-dom";
import User from "./User";

export default function UserDetails({ users }) {
    const { userId } = useParams();

    return (
        <div>
            {users.map((user) => {
                user.login.uuid === userId && <User data={user} />;
            })}
        </div>
    );
}
