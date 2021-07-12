import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";

import { CategoriesI } from "../interfaces/ProductI";
import { useState } from "react";

interface Props {
    activeCategory: string;
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoriesNav: React.FC<Props> = ({
    activeCategory,
    setActiveCategory,
}) => {
    const [categories, setCategories] = useState<CategoriesI[]>([]);

    useEffect(() => {
        axios.get("/categories").then((res) => {
            setCategories(res.data.data);
        });
    }, []);

    return (
        <>
            {categories.length > 0 ? (
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
                                        onClick={() =>
                                            setActiveCategory(category.type)
                                        }
                                    >
                                        {category.text}
                                    </Nav.Item>
                                </Nav>
                            );
                        })}
                    </Navbar.Collapse>
                </Navbar>
            ) : null}
        </>
    );
};

export default CategoriesNav;
