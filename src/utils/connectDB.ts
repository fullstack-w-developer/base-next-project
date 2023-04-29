import { MONGODB_URI } from "@/helpers/constants/env-variables";
import mongoose from "mongoose";

const connectDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log("already connected");
        return;
    }
    mongoose.set("strictQuery", false);
    mongoose
        .connect(MONGODB_URI)
        .then(() => {
            console.log("connected DB");
        })
        .catch((err) => console.log(err));
};

export default connectDB;
