import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: string,
        require: true,
    },
    password: {
        type: string,
        require: true
    },
    profilePic: {
        type: string,
        require: true
    },
},
    {
        timestamp: true
    })

export const User = mongoose.model("User", userSchema)