const User1 = require("../Models/User");

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

async function registerUser(req,res)
{
    try{
         const {username , email , password } = req.body;
         const check = await User1.findOne({
            username : username
         })
         console.log(req.body)

         if(check)
         {
             return res.status(400).json({
                success : false ,
                message : "User already exist"
             })
         }
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt);
         const newUser = await User1.create({
            username : username,
             email :email,
             password : hashedPassword
         })

         if(newUser)
         {
             return res.status(200).json({
                 success:true ,
                 message : "User is added",
                 data:newUser
             
             })
         }
    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({
             success : false ,
             message : "Some error occrued ! Try again"
        })
    }
}

async function loginUser(req,res)
{
     try{
        const {username,password}=req.body

        const user = await User1.findOne({username});
        if(!user)
        {
            return res.status(400).json({
                success : false ,
                message : "User dont exist"
            })
        }

        const match = await bcrypt.compare(password,user.password)

        if(!match)
        {
            return res.status(400).json({
                 success : false ,
                 message : "Incorrect password"
            })
        }

        const token = jwt.sign({
            userId : user._id,
            username : user.username,

        }, process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30m"
        })

        res.status(200).json({
             success:true ,
             message:"Logged in succesfully",
             token
        })




     }
     catch(e)
     {
           console.log(e)
           res.status(500).json({
              success : false ,
              message:"Some error occured !"
           })
     }
}


module.exports = {registerUser,loginUser}