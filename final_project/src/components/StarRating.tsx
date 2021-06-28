import React from "react";

interface Props {
    value: number;
    text: string;
    color?: string;
}

const showStars = (ratingValue: number, value: number) => {
    if (ratingValue >= value) {
        return "fas fa-star";
    } else if (ratingValue >= value - 0.5) {
        return "fas fa-star-half-alt";
    }
    return "far fa-star";
};

const StarRating: React.FC<Props> = ({ value, text, color }): JSX.Element => {
    const rating = [];
    for (let i = 1; i < 6; i++) {
        rating.push(
            <span key={`${i}-${value}`}>
                <i
                    style={{
                        color: color,
                        textShadow:
                            "-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000",
                    }}
                    className={showStars(value, i)}
                ></i>
            </span>
        );
    }

    return (
        <div className="rating">
            {rating}
            <p>{text && text}</p>
        </div>
    );
};

StarRating.defaultProps = {
    color: "#f8e825",
};

export default StarRating;
