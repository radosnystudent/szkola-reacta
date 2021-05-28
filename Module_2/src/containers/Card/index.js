import NavBar from "../../components/NavBar/NavBar";
import Image from "../../components/Image/Image";
import Textarea from "../../components/Textarea/Textarea";
import Footer from "../../components/Footer/Footer";

import "./styles/Card.css";

function Card() {
    return (
        <>
            <div className="card">
                <NavBar title="Shrimp and Chorizo Paella" date="25/01/2021" />
                <div className="image-container">
                    <Image
                        src="wallpaper4"
                        alt="Witcher 3 wallpaper"
                        type="general"
                    />
                </div>
                <Textarea>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc accumsan est lacus, sit amet pellentesque mi malesuada
                    eget. Fusce tortor magna, tincidunt in ante tempor, feugiat
                    porttitor libero.
                </Textarea>
                <Footer />
            </div>
        </>
    );
}

export default Card;
