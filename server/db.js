import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export function connectDB() {
    try {
        mongoose.connect(MONGODB_URI);
        console.log("Connected on Atlas/Mongo");
    } catch (error) {
        console.error(error)
    }
};