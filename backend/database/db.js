const mongoose = require("mongoose")

async function connectoDB()
{
       try{
            await mongoose.connect(
               process.env.MONGODB_URI
            );
            console.log("mongodb is connected")
       }
       catch(e){

             throw new Error(e)
       }
}

module.exports = connectoDB