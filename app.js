import express from "express";
import router from "./routes/product.routes.js";

const app = express()

app.use('/api/products' , router)

export default app;