import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faShareAlt,
    faArrowCircleDown,
    faArrowCircleUp,
    // faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/Footer.css";

function Footer() {
    const [showContent, changeVisibility] = useState(false);

    function clicked() {
        changeVisibility((showContent) => !showContent);
    }

    const iconStyle = showContent ? faArrowCircleUp : faArrowCircleDown;

    return (
        <>
            <div className="footer-container">
                <div className="footer-element-left">
                    <FontAwesomeIcon icon={faHeart} className="my-icon" />
                    <FontAwesomeIcon icon={faShareAlt} className="my-icon" />
                </div>
                <div className="footer-element-left">
                    <FontAwesomeIcon
                        icon={iconStyle}
                        className="my-icon"
                        onClick={clicked}
                    />
                </div>
            </div>
            {showContent ? (
                <>
                    <div className="full-text">
                        Nulla urna orci, pellentesque ac suscipit a, mattis id
                        augue. Fusce libero ligula, dictum eget tristique eu,
                        consectetur vel risus. Nullam scelerisque orci eget nisl
                        aliquam dignissim. Ut vitae pulvinar lectus, ac varius
                        ante. Integer consequat velit erat, iaculis pretium est
                        gravida quis. Aenean at vulputate nisi. Donec enim ante,
                        feugiat ut lobortis sed, gravida id odio. Fusce
                        venenatis interdum dapibus. <br />
                        Sed a nulla rutrum, finibus tortor vel, viverra felis.
                        Nulla non posuere ligula, a consequat eros. Aenean
                        pharetra, est ut lobortis sodales, augue felis efficitur
                        eros, sed placerat ante quam tempor justo. Quisque a
                        tincidunt dui. <br /> Vivamus pulvinar ornare odio, nec
                        pulvinar nunc rhoncus vel. Praesent sed accumsan lorem.
                        Praesent scelerisque libero sit amet purus porttitor,
                        non gravida augue porta. Fusce et luctus mauris,
                        venenatis ultricies orci. Ut mattis nibh ligula, a
                        faucibus lectus efficitur nec. In hac habitasse platea
                        dictumst. Proin ut mauris metus. Mauris ultrices varius
                        ex et consequat.
                    </div>
                </>
            ) : (
                <p></p>
            )}
        </>
    );
}

export default Footer;
