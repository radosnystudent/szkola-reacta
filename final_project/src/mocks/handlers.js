import { rest } from "msw";

import { categories, products } from "./data";

export const handlers = [
    rest.get("/categories", (req, res, ctx) => {
        return res(ctx.json({ data: categories }));
    }),

    rest.get("/products", (req, res, ctx) => {
        return res(ctx.json({ data: products }));
    }),
];
