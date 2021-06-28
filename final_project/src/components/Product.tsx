import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

import ProductI from "../interfaces/ProductI";

interface Props {
    product: ProductI;
}

const Product: React.FC<Props> = ({ product }): JSX.Element => {
    return (
        <Card className="my-3 p-3 rounded product">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link
                    to={`/product/${product._id}`}
                    style={{ textDecoration: "none", color: "#000" }}
                >
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <StarRating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>
                <Card.Text as="h3">{product.price}zł</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
