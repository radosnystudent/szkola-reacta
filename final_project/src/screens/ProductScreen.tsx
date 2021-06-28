import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";

import Loading from "../components/Loading";
import Message from "../components/Message";

import StarRating from "../components/StarRating";
import { ProductI } from "../interfaces/ProductI";
import { products } from "../data/products";

type MatchParams = {
    id: string;
};

const ProductScreen: React.FC<RouteComponentProps<MatchParams>> = ({
    match,
}) => {
    const productId = match.params.id;
    const [qty, setQty] = useState(1);
    // const history = useHistory();
    const loading = false;
    const error = false;
    // const dispatch = useDispatch();

    const product: ProductI = products.filter(
        (item: ProductI) => item._id === productId
    )[0];

    // const productDetail = useSelector((state) => state.productDetails);
    // const { loading, error, product } = productDetail;

    // useEffect(() => {
    //     dispatch(productDetails(match.params.id));
    // }, [dispatch, match]);

    // const addToCartHandler = () => {
    //     dispatch(addToCart(product._id, qty));
    //     history.push("/cart");
    // };

    return (
        <>
            {/* <Link className="btn btn-dark my-3" to="/">
                Home
            </Link> */}
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
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
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: ${product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col className="product-page-section">
                                            Price:
                                        </Col>
                                        <Col className="product-page-section">
                                            ${product.price}
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
                                                ? "In stock"
                                                : "Out of stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col className="product-page-section">
                                                Qty
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
                                        // onClick={addToCartHandler}
                                        className="btn-block rounded"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Add to card
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;