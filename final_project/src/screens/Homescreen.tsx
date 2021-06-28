import React, { useState } from "react";
import { Row, Col, Offcanvas } from "react-bootstrap";

import { products } from "../data/products";
import Product from "../components/Product";
import ProductI from "../interfaces/ProductI";

const Homescreen: React.FC = (): JSX.Element => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="homescreen-container">
            <Offcanvas
                show={show}
                onHide={handleClose}
                scroll={true}
                backdrop={true}
                style={{ width: "200px" }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ textDecoration: "underline" }}>
                        My shop
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="sidebar-items">
                    <Row className="categories-title">Kategorie</Row>
                    <Row>Elektronika</Row>
                    <Row>Gry</Row>
                    <Row>Filmy</Row>
                </Offcanvas.Body>
            </Offcanvas>
            <i
                className="fas fa-angle-right arrow-btn"
                onClick={handleShow}
            ></i>
            <Col className="products">
                <Row>
                    {products.map((product: ProductI) => {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </div>
    );
};

export default Homescreen;
