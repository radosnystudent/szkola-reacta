import { rest } from "msw";

import { categories, products } from "./data";

export const handlers = [
    rest.get("/categories", (req, res, ctx) => {
        return res(ctx.json({ data: categories }));
    }),

    rest.get("/products", (req, res, ctx) => {
        return res(ctx.json({ data: products }));
    }),

    rest.get("/product/:productId", (req, res, ctx) => {
        const productId = req.params.productId;

        const product = products.find((item) => item._id === productId);

        if (!product) {
            return res(ctx.status(404));
        }

        return res(ctx.json({ data: product }));
    }),
];
