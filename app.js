import express from "express";
import router from "./routes/product.routes.js";

const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(router)

export default app;