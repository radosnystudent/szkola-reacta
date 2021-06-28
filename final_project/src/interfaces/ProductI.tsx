export interface ProductI {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

export interface CategoriesI {
    type: string;
    text: string;
    _id: string;
}
