import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import CategoriesNav from "../components/CategoriesNav";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Product from "../components/Product";

import { fetchProducts } from "../actions/productActions";

import { ProductI } from "../interfaces/ProductI";
import { RootState } from "../store";
import { ProductReducer } from "../reducers/productReducer";

const Homescreen: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    const [pagination, setPaginationItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [maxItems, setMaxItems] = useState(0);
    const { products, loading, error } = useSelector<RootState, ProductReducer>(
        (state) => state.products
    );

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    useEffect(() => {
        if (products) {
            setMaxItems(products.length);
        }
    }, [products]);

    useEffect(() => {
        const items: any = [];
        for (let i = 1; i <= Math.ceil(maxItems / 10); i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === activePage}
                    onClick={() => setActivePage(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
        setPaginationItems(items);
    }, [activePage, maxItems]);

    useEffect(() => {
        if (products) {
            let counter = 0;
            if (activeCategory !== "all") {
                products.forEach((product: ProductI) => {
                    if (product.category === activeCategory) {
                        counter++;
                    }
                });
            } else {
                counter = products.length;
            }
            setMaxItems(counter);
            setActivePage(1);
        }
    }, [activeCategory, products]);

    return (
        <div className="homescreen-container">
            <div className="horizontal-line-separate"></div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">
                    <div>{error}</div>
                </Message>
            ) : (
                <>
                    <CategoriesNav
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />

                    <Row>
                        <Col className="products">
                            <Row>
                                {products &&
                                    products.map(
                                        (product: ProductI, idx: number) => {
                                            return idx >=
                                                activePage * 10 - 10 &&
                                                idx < activePage * 10 ? (
                                                product.category ===
                                                    activeCategory ||
                                                activeCategory === "all" ? (
                                                    <Col
                                                        key={product._id}
                                                        sm={12}
                                                        md={6}
                                                        lg={4}
                                                        xl={3}
                                                    >
                                                        <Product
                                                            product={product}
                                                        />
                                                    </Col>
                                                ) : null
                                            ) : null;
                                        }
                                    )}
                            </Row>
                        </Col>
                        <div className="pagination-container">
                            {pagination.length > 0 ? (
                                <Pagination>{pagination}</Pagination>
                            ) : null}
                        </div>
                    </Row>
                </>
            )}
        </div>
    );
};

export default Homescreen;
