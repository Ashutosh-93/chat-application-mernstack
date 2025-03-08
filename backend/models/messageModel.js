import mongoose from "mongoose"

const messageSchema = mongoose.Schema({
    text: {
        type: string,
        require: true,
    },
    sender: {
        type: mongoose.model.Type.ObjectId,
        ref: "User"
    },
    reciver: {
        type: mongoose.model.Type.ObjectId,
        ref: "User"
    },
},
    {
        timestamp: true
    })

export const Message = mongoose.model("User", messageSchema)