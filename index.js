import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
dotenv.config()

connectDB()
const port = process.env.PORT

app.listen(port , ()=>{
    console.log(`Server is running on PORT : ${port}`)
})