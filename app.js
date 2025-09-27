import express from "express";
import router from "./routes/product.routes.js";
import cors from "cors";

const app = express()
app.use(cors());
app.set('view engine','ejs')
app.use(express.static('public'))

app.use(router)

export default app;