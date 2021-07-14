import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";

import Loading from "../components/Loading";
import Message from "../components/Message";
import StarRating from "../components/StarRating";

import { RootState } from "../store";
import { ProductReducer } from "../reducers/productReducer";
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

type MatchParams = {
    id: string;
};

const ProductScreen: React.FC<RouteComponentProps<MatchParams>> = ({
    match,
}) => {
    const productId = match.params.id;
    const [qty, setQty] = useState(1);
    const { product, loading, error } = useSelector<RootState, ProductReducer>(
        (state) => state.products
    );
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(productId));
        // eslint-disable-next-line
    }, [productId]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.replace("/cart");
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : product ? (
                <Row className="m-5">
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <StarRating
                                    value={product.rating}
                                    text={`${product.numReviews} opinii`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Cena: {product.price}zł
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Opis: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col className="product-page-section">
                                            Cena:
                                        </Col>
                                        <Col className="product-page-section">
                                            {product.price}zł
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col className="product-page-section">
                                            Status:
                                        </Col>
                                        <Col className="product-page-section">
                                            {product.countInStock > 0
                                                ? "Dostępny"
                                                : "Brak towaru"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col className="product-page-section">
                                                Ilość
                                            </Col>
                                            <Col className="product-page-section">
                                                <Form.Control
                                                    className="form-control-select"
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                >
                                                    {Array.from(
                                                        Array(
                                                            product.countInStock
                                                        ),
                                                        (_, index) => index
                                                    ).map((value) => {
                                                        return (
                                                            <option
                                                                key={value + 1}
                                                                value={
                                                                    value + 1
                                                                }
                                                            >
                                                                {value + 1}
                                                            </option>
                                                        );
                                                    })}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block rounded"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Dodaj do koszyka
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            ) : null}
        </>
    );
};

export default ProductScreen;
