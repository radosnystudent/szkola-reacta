import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import { CategoriesI } from "../interfaces/ProductI";
import Loading from "./Loading";
import Message from "./Message";
import { RootState } from "../store";
import { ProductReducer } from "../reducers/productReducer";
// import { getCategories } from "../actions/productActions";

interface Props {
    activeCategory: string;
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoriesNav: React.FC<Props> = ({
    activeCategory,
    setActiveCategory,
}) => {
    const { categories, loading, error } = useSelector<
        RootState,
        ProductReducer
    >((state) => state.products);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getCategories());
    // }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">
                    <div>{error}</div>
                </Message>
            ) : (
                <>
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
                </>
            )}
        </>
    );
};

export default CategoriesNav;
