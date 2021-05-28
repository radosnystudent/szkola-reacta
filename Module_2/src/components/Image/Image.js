import avatar18 from "./assets/avatar18.jpg";
import avatar23 from "./assets/avatar23.jpg";
import wallpaper4 from "./assets/wallpaper4.jpg";
import wallpaper7 from "./assets/wallpaper7.jpg";

const images = {
    avatar18,
    avatar23,
    wallpaper4,
    wallpaper7,
};

function Image({ src, alt, type }) {
    const styles = {
        logo: {
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "fill",
            borderRadius: "50%",
        },
        general: {
            maxWidth: "100%",
            maxHeight: "100%",
        },
    };

    return <img src={images[src]} alt={alt} style={styles[type]} />;
}

export default Image;
