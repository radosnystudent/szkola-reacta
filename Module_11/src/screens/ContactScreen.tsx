import React from "react";
import { useHistory } from "react-router";

import Button from "../components/Button";
import ContactForm from "../containers/ContactForm";

const ContactScreen: React.FC = () => {
    const history = useHistory();

    return (
        <div className="contact-container">
            <div className="footer-content">
                <Button
                    variant="info"
                    label="Strona główna"
                    onClick={() => history.push("/")}
                />
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactScreen;
