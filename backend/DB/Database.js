import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config(); // or with path if your file is in a subfolde

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;
    console.log(db);
    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}
