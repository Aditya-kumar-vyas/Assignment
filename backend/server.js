const express = require("express")
require('dotenv').config()
const cors = require('cors')
const connectDb = require('./database/db')
const authRoutes = require('./Routes/auth-routes')
const app = express()

const PORT = 3000
app.use(cors())
connectDb()
app.use(express.json())
app.use('/api/auth' , authRoutes)
// app.get('/',(req,res)=>{
//       res.send("hello from server")
      
// })

app.listen(PORT , ()=>{
     console.log("Server is listening");
     
})