import "./styles/MenuLink.css";

function MenuLink({ children, to, isActive }) {
    const styles = {
        color: isActive ? "#f9ca24" : "#eb4d4b",
    };

    return (
        <>
            <div class="menu-link">
                <a href={to} style={styles}>
                    {children}
                </a>
            </div>
        </>
    );
}

export default MenuLink;
