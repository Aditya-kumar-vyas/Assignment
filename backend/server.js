const express = require("express")
require('dotenv').config()
const cors = require('cors')
const connectDb = require('./database/db')
const authRoutes = require('./Routes/auth-routes')
const app = express()


app.use(cors())
connectDb()
app.use(express.json())
app.use('/api/auth' , authRoutes)
// app.get('/',(req,res)=>{
//       res.send("hello from server")
      
// })
const port = process.env.PORT||3000
app.listen(port , ()=>{
     console.log("Server is listening");
     
})