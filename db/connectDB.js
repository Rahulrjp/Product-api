import mongoose from "mongoose"

const connectDB = () => {
    return mongoose.connect(process.env.URI)
}

export default connectDB;