import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    rating: { type: Number, default: 4.9 },
    price: { type: Number, required: true },
    tags: { type: Array },
    features: { type: Object, required: true },
    description: { type: String, required: true },
    images: { type: Array, default: null },
    discount: { type: Number, default: 5 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
})

const productModel = mongoose.model('product', productSchema)

export default productModel;