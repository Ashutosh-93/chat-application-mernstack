import { User } from "../models/userModel";

const Login =async (req, res)=>{
     try {
          const {email, password} = req.body
          const user =await User.find({email})
          if(!user) return res.send("User not Found")
          if(user.password !== password) return res.send("Invalid Password !!")

          return res.send("user Login successfuly",user)
     } catch (error) {
          console.log(error);
          return res.send("login Fail !!")
     }
}

const Register = async (req, res)=>{
     try {
          
     } catch (error) {
          console.log("Register error :-",error);
          return res.send("Register Fail !!")
     }
}
 
const GetOtherUsers = async (req, res)=>{
     try {
          
     } catch (error) {
          console.log("Get Other User's error :-",error);
          return res.send("User retrive Fail !!")
     }
}
 
export {Login,Register,GetOtherUsers}