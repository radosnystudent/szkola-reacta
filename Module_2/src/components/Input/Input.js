const colors = {
    "peter river": "#3498db",
    emerald: "#2ecc71",
    alizarin: "#e74c3c",
    amethyst: "#9b59b6",
    silver: "#bdc3c7",
};

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const styles = {
        background: bgColor ? colors[bgColor] : colors["peter river"],
        color: color ? colors[color] : colors["silver"],
        border: `${borderSize}px solid ${colors[borderColor]}`,
        "border-radius": borderRadius,
    };

    return <input style={styles} />;
}

export default Input;
