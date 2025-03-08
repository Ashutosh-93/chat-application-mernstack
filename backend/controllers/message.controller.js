import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import { User } from "../models/userModel.js";

const SendMessage = async (req, res) => {
     try {

          const sender = await User.findById(req?.userId)
          if (!sender) return res.status(400).send("invalid user id, user not found")
          const reciver = await User.findById(req?.params?.id)
          const text = req.body.text
          if (!reciver) return res.status(400).send("invalid reciver id, reciver not found")
          let conversation = await Conversation.findOne({ patispents: [sender._id, reciver._id] })
          if (!conversation) {
               try {
                    conversation = await Conversation.create({
                         patispents: patispents.push(sender._id, reciver._id)
                    })
               } catch (error) {
                    console.log("Conversation create Fail !!");
                    return res.status(400).send("fail to create conversation !!")
               }
          }

          const message = await Message.create({
               text: text,
               sender: sender._id,
               reciver: reciver._id
          })
          if (!message) return res.status(400).send("fail to create message")
          conversation.messages.push(message._id)
          await conversation.save()

          return res.status(200).send(message)

     } catch (error) {
          console.log("send message error : ", error);
          return res.status(400).send("Message send Fail !!")
     }
}

const GetMessages = async (req, res) => {
     try {
          const user = await User.findById(req.userId)
          const friend = await User.findById(req.params?.id)
          let conversation = await Conversation.findOne({ patispents: [user._id, friend._id] })
          if (conversation) return res.status(400).send("Conversation not found !!", { messages: [] })
          return res.status(200).send("messages retrive successfuly", { messages: conversation?.messages || [] })

     } catch (error) {
          console.log("retrive message error : ", error);
          return res.status(400).send("Messages resive Fail !!")
     }
}
export { SendMessage, GetMessages }