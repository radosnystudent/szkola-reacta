import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "react-bootstrap";

// import { products } from "../data/products";

import CategoriesNav from "../components/CategoriesNav";
import { shuffleArray } from "../utilities/auxiliaryFunctions";
import Product from "../components/Product";
import { ProductI } from "../interfaces/ProductI";
import axios from "axios";

const Homescreen: React.FC = (): JSX.Element => {
    const [activePage, setActivePage] = useState(1);
    const [pagination, setPaginationItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [products, setProducts] = useState<ProductI[]>([]);
    const [maxItems, setMaxItems] = useState(products.length);

    useEffect(() => {
        if (products.length === 0) {
            axios.get("/products").then((res) => {
                setProducts(res.data.data);
                setMaxItems(res.data.data.length);
            });
            shuffleArray(products);
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
        let counter = 0;
        if (activeCategory !== "all") {
            products.forEach((product) => {
                if (product.category === activeCategory) {
                    counter++;
                }
            });
        } else {
            counter = products.length;
        }
        setMaxItems(counter);
        setActivePage(1);
    }, [activeCategory, products]);

    return (
        <div className="homescreen-container">
            <div className="horizontal-line-separate"></div>
            <CategoriesNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <Row>
                <Col className="products">
                    <Row>
                        {products &&
                            products.map((product: ProductI, idx: number) => {
                                return idx >= activePage * 10 - 10 &&
                                    idx < activePage * 10 ? (
                                    product.category === activeCategory ||
                                    activeCategory === "all" ? (
                                        <Col
                                            key={product._id}
                                            sm={12}
                                            md={6}
                                            lg={4}
                                            xl={3}
                                        >
                                            <Product product={product} />
                                        </Col>
                                    ) : null
                                ) : null;
                            })}
                    </Row>
                </Col>
                <div className="pagination-container">
                    {pagination.length > 0 ? (
                        <Pagination>{pagination}</Pagination>
                    ) : null}
                </div>
            </Row>
        </div>
    );
};

export default Homescreen;
