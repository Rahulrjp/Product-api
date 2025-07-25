import productModel from "./models/schema.js"
import connectDB from "./db/connectDB.js"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

const productJson = JSON.parse(fs.readFileSync("./product.json","utf-8"))

const start = async () => {
    try{
        await connectDB()
        await productModel.deleteMany()
        await productModel.create(productJson)
        console.log("Success")
    }
    catch(error){
        console.log(error)
    }
}

start()