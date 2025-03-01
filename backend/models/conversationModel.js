import mongoose from "mongoose"

const conversationSchema = mongoose.Schema({
    patispents: [
        {
            type: mongoose.Model.Type.ObjectId,
            ref: "Users"
        }
    ],
    messages: [
        {
            type: mongoose.Model.Type.ObjectId,
            ref: "Messages"
        }
    ],
},
    {
        timestamp: true
    }
)

export const Conversation = mongoose.model("User", conversationSchema)