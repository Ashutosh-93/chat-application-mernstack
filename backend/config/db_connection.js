import mongoose from 'mongoose'
const uri = "mongodb://localhost:27017/chat-more"
async function dbConnect() {
    try {
        await mongoose.connect(uri)
        console.log("database connected");
    } catch (error) {
        console.log("fali to connect mongodb : ", error);
    }
}

export default dbConnect