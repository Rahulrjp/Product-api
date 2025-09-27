import { Router } from "express";
import { getOneProduct, getProducts } from "../controllers/product.controller.js";
import { getApiPage, getHomepage } from "../controllers/ui.controller.js";

const router = Router();

router.route('/').get(getHomepage)
router.route('/api').get(getApiPage)
router.route('/api/products').get(getProducts)
router.route('/api/products/:id').get(getOneProduct)

export default router;