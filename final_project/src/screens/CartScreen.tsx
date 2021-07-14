import React from "react";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../store";
import { ProductReducer } from "../reducers/productReducer";
import { CartReducer } from "../reducers/cartReducer";
import { ProductI } from "../interfaces/ProductI";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen: React.FC = () => {
    const dispatch = useDispatch();
    const [products] = useSelector<RootState, ProductReducer>(
        (state) => state.products
    );
    const [cartProducts] = useSelector<RootState, CartReducer>(
        (state) => state.cart
    );

    const removeFromCartHander = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="cartscreen-container">
            <Row>
                <Col md={8}>
                    <h1>Twój koszyk</h1>
                    {cartProducts.length === 0 ? (
                        <Message variant="info">
                            Twój koszyk jest pusty!{" "}
                            <Link to="/">Powrót do sklepu</Link>
                        </Message>
                    ) : (
                        <ListGroup variant="flush">
                            {products.map(
                                (product: ProductI, index: number) => {
                                    if (
                                        product._id === cartProducts[index]._id
                                    ) {
                                        return (
                                            <ListGroup.Item key={product._id}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col md={3}>
                                                        <Link
                                                            to={`/product/${product._id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={2}>
                                                        {product.price}
                                                    </Col>
                                                    <Col md={2}>
                                                        <Form.Control
                                                            className="form-control-select"
                                                            as="select"
                                                            value={
                                                                cartProducts[
                                                                    index
                                                                ].qty
                                                            }
                                                            onChange={(e) =>
                                                                dispatch(
                                                                    addToCart(
                                                                        product._id,
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            {Array.from(
                                                                Array(
                                                                    product.countInStock
                                                                ).keys()
                                                            ).map((value) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            value +
                                                                            1
                                                                        }
                                                                        value={
                                                                            value +
                                                                            1
                                                                        }
                                                                    >
                                                                        {value +
                                                                            1}
                                                                    </option>
                                                                );
                                                            })}
                                                        </Form.Control>
                                                    </Col>
                                                    <Col md={2}>
                                                        <Button
                                                            type="button"
                                                            className="rounded"
                                                            variant="dark"
                                                            onClick={() =>
                                                                removeFromCartHander(
                                                                    product._id
                                                                )
                                                            }
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        );
                                    } else {
                                        return null;
                                    }
                                }
                            )}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="btn-block rounded"
                                    disabled={cartProducts.length === 0}
                                    // onClick={checkoutHandler}
                                >
                                    Przejdź do płatności
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CartScreen;
