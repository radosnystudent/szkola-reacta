import MenuLink from "../../components/MenuLink/MenuLink";

import "./styles/Menu.css";

function Menu() {
    return (
        <>
            <div className="menu-navbar">
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about" isActive={true}>
                    About
                </MenuLink>
                <MenuLink to="/contact">Contact</MenuLink>
                <MenuLink to="/posts">Posts</MenuLink>
            </div>
        </>
    );
}

export default Menu;
