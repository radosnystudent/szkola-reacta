import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { CategoriesI } from "../interfaces/ProductI";

interface Props {
    activeCategory: string;
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
    {
        type: "all",
        text: "Wszystkie produkty",
        _id: "0c5c87bc-c2cb-402a-ae35-99aa6baf791f",
    },
    {
        type: "electronics",
        text: "Elektronika",
        _id: "b6dbe3ea-94cf-4126-b208-393d37d22c0",
    },
    {
        type: "games",
        text: "Gry",
        _id: "ae03ce3d-0001-45fe-a5e3-15f1d29e0318",
    },
    {
        type: "movies",
        text: "Filmy",
        _id: "1f693ad2-9224-44b5-9f03-dfb26c45cef6",
    },
];

const CategoriesNav: React.FC<Props> = ({
    activeCategory,
    setActiveCategory,
}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse
                id="categories-navbar-nav"
                className="categories-nav"
            >
                {categories.map((category: CategoriesI) => {
                    return (
                        <Nav key={category._id}>
                            <Nav.Item
                                className={
                                    activeCategory === category.type
                                        ? "category-active"
                                        : ""
                                }
                                onClick={() => setActiveCategory(category.type)}
                            >
                                {category.text}
                            </Nav.Item>
                        </Nav>
                    );
                })}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CategoriesNav;
