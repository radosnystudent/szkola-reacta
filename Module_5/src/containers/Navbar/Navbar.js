import React, { useRef } from "react";
import { FaAlignJustify } from "react-icons/fa";
import NavlinkComponent from "../../components/Navlink/NavlinkComponent";

import "./styles/Navbar.css";

export default function Navbar() {
    const navbarStatus = useRef();
    const navbarIcon = useRef();

    const changeNavbarVisibility = () => {
        if (navbarStatus.current.style.width !== "250px") {
            navbarStatus.current.style.width = "250px";
            navbarIcon.current.style.width = "250px";
            navbarIcon.current.style.textAlign = "right";
        } else {
            navbarStatus.current.style.width = "0px";
            navbarIcon.current.style.width = "50px";
            navbarIcon.current.style.textAlign = "center";
        }
    };

    return (
        <>
            <div ref={navbarIcon} className="menu-icon-container">
                <FaAlignJustify
                    className="menu-button"
                    onClick={changeNavbarVisibility}
                />
            </div>
            <div ref={navbarStatus} className="my-navbar">
                <nav>
                    <ul>
                        <NavlinkComponent
                            to="/"
                            onclick={changeNavbarVisibility}
                            label="Home"
                        />
                        <NavlinkComponent
                            to="/contact"
                            onclick={changeNavbarVisibility}
                            label="Contact"
                        />
                        <NavlinkComponent
                            to="/about"
                            onclick={changeNavbarVisibility}
                            label="About"
                        />
                        <NavlinkComponent
                            to="/dialogbox"
                            onclick={changeNavbarVisibility}
                            label="Dialogbox"
                        />
                        <NavlinkComponent
                            to="/snackbar"
                            onclick={changeNavbarVisibility}
                            label="Snackbar"
                        />
                        <NavlinkComponent
                            to="/users"
                            onclick={changeNavbarVisibility}
                            label="Users"
                        />
                    </ul>
                </nav>
            </div>
        </>
    );
}
