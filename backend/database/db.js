const mongoose = require("mongoose")

async function connectoDB()
{
       try{
            await mongoose.connect(
              "mongodb+srv://kumarvyasaditya:Aditya008@cluster0.5mkvo.mongodb.net/"   
            );
            console.log("mongodb is connected")
       }
       catch(e){

             throw new Error(e)
       }
}

module.exports = connectoDB