import { Link } from "react-router-dom";

import "./styles/Loading.scss";

export default function Loading() {
    return (
        <>
            <div className="loading-container">
                <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle
                            className="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
                <div>
                    <Link className="mylink" to="/users">
                        Users
                    </Link>
                </div>
            </div>
        </>
    );
}
