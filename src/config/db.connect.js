import mongoose from "mongoose"
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to db: ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connectToDB