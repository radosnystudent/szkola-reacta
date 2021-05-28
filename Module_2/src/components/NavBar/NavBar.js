import Image from "../../components/Image/Image";
import "./styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function NavBar({ title, date }) {
    return (
        <>
            <div className="my-navbar">
                <div className="logo">
                    <Image src="avatar18" alt="Logo" type="logo" />
                </div>
                <div className="title navbar-text">{title}</div>
                <div className="date navbar-text">{date}</div>
                <FontAwesomeIcon icon={faEllipsisV} className="myIcon" />
            </div>
        </>
    );
}

export default NavBar;
