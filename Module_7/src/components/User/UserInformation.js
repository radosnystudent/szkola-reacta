import "./styles/User.scss";

export default function UserInfo({ userData }) {
    return (
        <>
            <div className="user-information">
                <p className="user-information-title">Email:</p>
                <p className="user-information-content">{userData.email}</p>
            </div>
            <div className="user-information-break"></div>
            <div className="user-information">
                <p className="user-information-title">Addres:</p>
                <p className="user-information-content">{userData.address}</p>
            </div>
            <div className="user-information-break"></div>
            <div className="user-information">
                <p className="user-information-title">Registered:</p>
                <p className="user-information-content">
                    {userData.registered}
                </p>
            </div>
        </>
    );
}
